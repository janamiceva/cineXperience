import { type Request, type Response } from 'express'
import SeatsRepository from "../repositories/seats-repository";


class SeatsController {

    public static async getAllSeats(_request: Request, response: Response): Promise<void> {
        try {
            const seats = await SeatsRepository.getAllSeats();
             response.status(200).json({ seats });
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
}

export default SeatsController;