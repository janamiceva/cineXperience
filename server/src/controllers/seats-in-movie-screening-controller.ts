import { type Request, type Response } from 'express'
import SeatsInMovieScreeningRepository from '../repositories/seats-in-movie-screening-repository';


class SeatsInMovieScreeningController {

    public static async getAllSeatsInMovieScreenings(request: Request, response: Response): Promise<void> {
        try {
            const seatsInMovieScreening = await SeatsInMovieScreeningRepository.getAllSeatsInMovieScreenings();
            response.status(200).json({ seatsInMovieScreening });
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getAllSeatsForMovieScreening(request: Request, response: Response): Promise<void> {
        try {
            const movieScreeningId = request.params.movieScreeningId
            const seatsInMovieScreening = await SeatsInMovieScreeningRepository.getAllSeatsForMovieScreening(Number.parseInt(movieScreeningId));
            response.status(200).json({ seatsInMovieScreening });
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async updateSeatStatus(request: Request, response: Response): Promise<void> {
        try {
            const movieScreeningId = request.params.screeningId
            const seatId = request.body.seatId
            const status = request.body.status
            const updatedSeat = await SeatsInMovieScreeningRepository.updateSeatStatus(Number.parseInt(movieScreeningId), Number.parseInt(seatId), Boolean(status));
            response.status(200).json({ updatedSeat });
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
}

export default SeatsInMovieScreeningController;