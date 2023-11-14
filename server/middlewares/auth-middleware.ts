import { type NextFunction, type Request, type Response } from 'express'
import { firebase } from '../config/admin-config'

const isAuthenticatedMiddleware = async (request: Request, response: Response, next: NextFunction) => {

    const token = request.headers.authorization?.split(' ')[1]

    try {
        const decodeValue = await firebase.auth().verifyIdToken(token)
        if(!decodeValue){
            return response.status(401).json({ message: 'You are not authenticated' })
        }
        return next();
    } catch (error) {
        return response.status(401).json({ message: 'You are not authenticated' })
    }

}

export default isAuthenticatedMiddleware;
