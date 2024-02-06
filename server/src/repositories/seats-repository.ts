import { Seat } from "@prisma/client";
import { prisma } from "../database";


class SeatsRepository {

    public static async getAllSeats(): Promise<Seat[]> {
        const seats = await prisma.seat.findMany()
        return seats;
    }

}

export default SeatsRepository;