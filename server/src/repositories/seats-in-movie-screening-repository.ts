import { SeatInMovieScreening } from "@prisma/client";
import { prisma } from "../database";


class SeatsInMovieScreeningRepository {

    public static async getAllSeatsInMovieScreenings(): Promise<SeatInMovieScreening[]> {
        const seatInMovieScreening = await prisma.seatInMovieScreening.findMany()
        return seatInMovieScreening;
    }

    public static async getAllSeatsForMovieScreening(movieScreeningId: number): Promise<SeatInMovieScreening[]> {
        const seatInMovieScreening = await prisma.seatInMovieScreening.findMany({
            where: {
                movieScreeningId
            },
            orderBy: [{
                seatId: 'asc'
            }]
        })
        return seatInMovieScreening;
    }

    public static async updateSeatStatus(movieScreeningId: number, seatId: number, status: boolean): Promise<SeatInMovieScreening> {
        const editedSeat = await prisma.seatInMovieScreening.update(
            {
            where: {
                seatId_movieScreeningId: {
                    seatId,
                    movieScreeningId
                } 
            },
            data: {
                status
            }
        })
        return editedSeat;
    }
}

export default SeatsInMovieScreeningRepository;