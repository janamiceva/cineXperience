import { FavoriteMovies } from '@prisma/client';
import { prisma } from '../database'
import Movie from '../types/movie'

class MovieRepository {
  public static async getMovies(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany();
    return movies
  }

  public static async getComingSoonMovies(): Promise<Movie[]> {
    const movies = await prisma.commingSoonMovies.findMany();
    return movies
  }

  public static async getMovieByMovieId(id: number): Promise<Movie> {
    const movie = await prisma.movie.findUnique({
      where: {
        id
      }
    })
    return movie as Movie
  }

  public static async getMoviesByQueryString(query: string): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        }
      }
    })
    return movies
  }


  public static async getMovieByGenre(genre: string): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      where: {
        genre: {
          has: genre
        }
      }
    })
    return movies
  }

  public static async deleteMovie(movieId: number): Promise<Movie> {
    const movie = await prisma.$transaction(async (tx) => {
      await tx.comment.deleteMany({
        where: {
          movieId
        }
      })

      await tx.movieScreening.deleteMany({
        where: {
          movieId
        }
      })

      const movie = await tx.movie.delete({
        where: {
          id: movieId
        }
      })
      return movie
    })
    return movie
  }

  public static async addMovie(name: string, genre: string[], description: string, director: string, duration: number, image: string, rating: number, cast: string[], videoId: string): Promise<Movie> {
    const movie = await prisma.movie.create({
      data: {
        name,
        genre,
        description,
        director,
        duration,
        image,
        rating,
        cast,
        videoId
      }
    })
    return movie
  }

  public static async editMovie(movieId: number, name: string, genre: string[], description: string, director: string, duration: number, image: string, rating: number, cast: string[], videoId: string): Promise<Movie> {
    const movie = await prisma.movie.update({
      where: {
        id: movieId
      },
      data: {
        name,
        genre,
        description,
        director,
        duration,
        image,
        rating,
        cast,
        videoId
      }
    })
    return movie
  }


  public static async saveMovieForUser(userId: string, movieId: number): Promise<FavoriteMovies | undefined> {
    const movie = await prisma.$transaction(async (tx) => {
      const savedMoviesForUser = await tx.favoriteMovies.findMany({
        where: {
          userId,
          movieId
        }
      })

      if (savedMoviesForUser.length === 0) {
        const savedMovie = await prisma.favoriteMovies.create({
          data: {
            userId,
            movieId
          }
        })
        return savedMovie
      } else {
        return undefined
      }
    })
    return movie
  }

  public static async getSavedMoviesForUser(userId: string): Promise<FavoriteMovies[]> {
    const savedMovies = await prisma.favoriteMovies.findMany({
      where: {
        userId
      }
    })
    return savedMovies
  }


  public static async deleteSavedMovieForUser(userId: string, movieId: number): Promise<FavoriteMovies> {
    const deletedSavedMoviesForUser = await prisma.favoriteMovies.delete({
      where: {
        movieId_userId: {
          movieId,
          userId
      } 
      }
    })
    return deletedSavedMoviesForUser;
  }

}

export default MovieRepository;