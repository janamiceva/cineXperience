import { prisma } from "../database";
import User from "../types/user";

class UserRepository {
    public static async getAllUsers (): Promise<User[]> {
        const users = await prisma.user.findMany();
        return users as User[];
    }

    public static async getUserByUserId (id: string): Promise<User> {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user as User;
    }

    public static async createUser (id: string, email: string): Promise<User>  {
        const newlyCreatedUser = await prisma.user.create({
            data: {
                id,
                email,
                role: 'REGULAR'
            }
        });
        return newlyCreatedUser as User;
    }
}

export default UserRepository;