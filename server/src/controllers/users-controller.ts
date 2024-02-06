import { type Request, type Response } from 'express'
import UserRepository from '../repositories/users-repository';

class UserController {

    public static async getAllUsers (_request: Request, response: Response): Promise<void> {
        try {
            const users = await UserRepository.getAllUsers();
            response.status(200).json({users});
        } catch (error) {
            response.status(500).json({ error: 'An error occured ' });
          }        
    };

    public static async getUserByUserId (request: Request, response: Response): Promise<void> {
        try {
            const userId = request.params.id;
            const user = await UserRepository.getUserByUserId(userId);
            response.status(200).json({user})
        } catch (error) {
            response.status(500).json({ error: 'An error occured ' });
          }     
    }

    public static async createUser(request: Request, response: Response): Promise<void> {
        try {
            const email = request.body.email;
            const userId = request.body.userId;
            const newlyCreatedUser = await UserRepository.createUser(userId, email);
            response.status(200).json(newlyCreatedUser);
        } catch (error) {
            response.status(500).json({ error: 'An error occured ' });
          }
    };
}

export default UserController;