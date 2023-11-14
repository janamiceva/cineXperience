import { prisma } from '../database'
import Movie from '../types/movie'

class MovieRepository {
  public static async getMovies(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany()
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

  // : Promise<Movie[]> NOT WORKING 
  public static async deleteAllMovies() {
    const movies = await prisma.movie.deleteMany()
    return movies
  }
}

export default MovieRepository;