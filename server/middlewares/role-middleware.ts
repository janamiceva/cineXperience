import { type NextFunction, type Request, type Response } from 'express'
import UserRole from '../src/types/user-role'
import { firebase } from '../config/admin-config'
import UserRepository from '../src/repositories/users-repository'


const hasRoleMiddleware = (role: UserRole) => async (request: Request, response: Response, next: NextFunction) => {
  try {
    const token = request.headers.authorization?.split(' ')[1]

    const decodeValue = await firebase.auth().verifyIdToken(token)

    const id = decodeValue.uid

    const user = await UserRepository.getUserByUserId(id as string)

    const userRole = user?.role as UserRole

    if (!role.includes(userRole)) {
      return response.status(401).json({ message: 'You are not authenticated' })
    }
    
    next()
  } catch (error) {
    return response.status(401).json({ message: 'You are not authenticated' })
  }
}

export default hasRoleMiddleware
