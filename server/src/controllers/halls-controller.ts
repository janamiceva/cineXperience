import { type Request, type Response } from 'express'
import HallsRepository from '../repositories/halls-repository';

class HallsController {
  public static async getAllHalls(request: Request, response: Response): Promise<void> {
    try {
      const halls = await HallsRepository.getAllHalls()
      response.status(200).json(halls)
    } catch (error) {
      response.status(500).json({ error: 'An error occurred' })
    }
  }

}

export default HallsController;