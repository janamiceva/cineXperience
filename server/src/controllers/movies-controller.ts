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

  public static async getMovieByMovieId(request: Request, response: Response): Promise<void> {
    try {
      const movieId = request.params.id
      const movie = await MovieRepository.getMovieByMovieId(Number.parseInt(movieId))
      response.status(200).json(movie)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

  public static async deleteAllMovies(request: Request, response: Response): Promise<void> {
    try {
      const movies = await MovieRepository.deleteAllMovies()
      response.status(200).json(movies)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }
}

export default MoviesController;