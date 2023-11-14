import { type Request, type Response } from 'express'
import ReservationsRepository from '../repositories/reservations-repository';

class ReservationsController {

    public static async getAllReservations(request: Request, response: Response): Promise<void> {
        try {
            const reservations = await ReservationsRepository.getAllReservations();
            response.status(200).json(reservations)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async createReservation(request: Request, response: Response): Promise<void> {
        try {
            const userId = request.body.userId
            const movieScreeningId = request.params.movieScreeningId
            const statusOfReservation = request.body.statusOfReservation
            const reservations = await ReservationsRepository.createReservation(userId, Number.parseInt(movieScreeningId), statusOfReservation);
            response.status(200).json(reservations)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getAllReservationsForUser(request: Request, response: Response): Promise<void> {
        try {
            const userId = request.params.userId
            const reservations = await ReservationsRepository.getAllReservationsForUser(userId);
            response.status(200).json(reservations)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
}

export default ReservationsController;