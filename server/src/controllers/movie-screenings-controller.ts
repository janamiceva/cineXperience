import { type Request, type Response } from 'express'
import MovieScreeningsRepository from '../repositories/movie-screenings-repository';

class MovieScreeningsController {
    public static async getAllScreenings(request: Request, response: Response): Promise<void> {
        try {
            const screenings = await MovieScreeningsRepository.getAllScreenings()
            response.status(200).json(screenings)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getAllScreeningsForMovie(request: Request, response: Response): Promise<void> {
        try {
            const movieId = request.params.movieId
            const screenings = await MovieScreeningsRepository.getAllScreeningsForMovie(Number.parseInt(movieId))
            response.status(200).json(screenings)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getScreeningById(request: Request, response: Response): Promise<void> {
        try {
            const screeningId = request.params.screeningId
            const screening = await MovieScreeningsRepository.getScreeningById(Number.parseInt(screeningId))
            response.status(200).json(screening)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
}

export default MovieScreeningsController;