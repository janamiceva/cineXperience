import { prisma } from "../database";
import Hall from "../types/hall";

class HallsRepository {

    public static async getAllHalls(): Promise<Hall[]> {
        const halls = await prisma.cinemaHall.findMany()
        return halls
    } 

}

export default HallsRepository;