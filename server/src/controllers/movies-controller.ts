import { type Request, type Response } from 'express'
import MovieRepository from '../repositories/movies-repository';

class MoviesController {
  public static async getAllMovies(request: Request, response: Response): Promise<void> {
    try {
      const movies = await MovieRepository.getMovies()
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

  public static async getMovieByGenre(request: Request, response: Response): Promise<void> {
    try {
      const genre = request.params.genre
      const movies = await MovieRepository.getMovieByGenre(genre)
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