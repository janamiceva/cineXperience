import { type Request, type Response } from 'express'
import MovieRepository from '../repositories/movies-repository';
import axios from 'axios';

const apiKey = process.env.OMDB_APIKEY;
class MoviesController {

  public static async APIMovies(_request: Request, response: Response): Promise<void> {
    console.log('apikey', apiKey)

    try {
      const allMovies = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=movie&y=2023`);
      const data = allMovies.data.Search;
      for (const movie of data) {
        const imdbID = movie.imdbID;
        const detailsResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);

        console.log(detailsResponse.data)

        const movieData = detailsResponse.data;
        await MovieRepository.addMovie(
          movieData.Title,
          movieData.Genre.split(',').map((genre: string) => genre.trim()),
          movieData.Plot || '',
          movieData.Director,
          parseFloat(movieData.Runtime) || 0,
          movieData.Poster || '',
          parseFloat(movieData.imdbRating) || 0,
          movieData.Actors.split(','),
          movieData.imdbID
        );
      }
      response.status(200).json(data)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }

  }

  public static async getAllMovies(_request: Request, response: Response): Promise<void> {
    try {
      const movies = await MovieRepository.getMovies()
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getAllMoviesPagination(request: Request, response: Response): Promise<void> {
    try {
      const currentPage = request.query.currentPage
      const movies = await MovieRepository.getMoviesPagination(Number(currentPage))
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getAllComingSoonMovies(request: Request, response: Response): Promise<void> {
    try {
      const movies = await MovieRepository.getComingSoonMovies()
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getMovieByMovieId(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.id
      const movie = await MovieRepository.getMovieByMovieId(Number.parseInt(movieId))
      response.status(200).json(movie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getMoviesByQueryString(request: Request, response: Response): Promise<void> {
    try {
      const query = request.params.query
      const movies = await MovieRepository.getMoviesByQueryString(query)
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getMoviesByGenre(request: Request, response: Response): Promise<void> {
    try {
      const genre = request.params.genre
      const movies = await MovieRepository.getMoviesByGenre(genre)
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }


  public static async deleteMovie(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.movieId
      const movie = await MovieRepository.deleteMovie(Number.parseInt(movieId))
      response.status(200).json(movie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async addMovie(request: Request, response: Response): Promise<void> {
    try {
      const name = request.body.name
      const genre = request.body.genre
      const description = request.body.description
      const director = request.body.director
      const duration = request.body.duration
      const image = request.body.image
      const rating = request.body.rating
      const videoId = request.body.videoId
      const cast = [request.body.cast]
      const movie = await MovieRepository.addMovie(name, genre, description, director, Number.parseFloat(duration), image, Number.parseFloat(rating), cast, videoId)
      response.status(200).json(movie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async editMovie(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.movieId
      const name = request.body.name
      const genre = request.body.genre
      const description = request.body.description
      const director = request.body.director
      const duration = request.body.duration
      const image = request.body.image
      const rating = request.body.rating
      const videoId = request.body.videoId
      const cast = [request.body.cast]
      const movie = await MovieRepository.editMovie(Number.parseInt(movieId), name, genre, description, director, Number.parseFloat(duration), image, Number.parseFloat(rating), cast, videoId)
      response.status(200).json(movie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async saveMovieForUser(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.movieId
      const userId = request.params.userId
      const savedMovie = await MovieRepository.saveMovieForUser(userId, Number.parseInt(movieId))
      response.status(200).json(savedMovie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async getSavedMoviesForUser(request: Request, response: Response): Promise<void> {
    try {
      const userId = request.params.userId
      const savedMovies = await MovieRepository.getSavedMoviesForUser(userId)
      response.status(200).json(savedMovies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async deleteSavedMovieForUser(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.movieId
      const userId = request.params.userId
      const deletedSavedMovies = await MovieRepository.deleteSavedMovieForUser(userId, Number(movieId))
      response.status(200).json(deletedSavedMovies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

}

export default MoviesController;