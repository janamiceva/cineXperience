import { prisma } from "../database";
import Reservation from "../types/reservation";

class ReservationsRepository {

    public static async getAllReservations(): Promise<Reservation[]> {
        const reservations = await prisma.reservation.findMany()
        return reservations;
    }

    public static async createReservation(userId: string, movieScreeningId: number, statusOfReservation: string): Promise<Reservation> {
        const reservation = await prisma.reservation.create({
            data: {
                userId,
                movieScreeningId,
                status: statusOfReservation
            }
        })
        return reservation;
    }

    public static async getAllReservationsForUser(userId: string): Promise<Reservation[]> {
        const reservations = await prisma.reservation.findMany({
            where: {
                userId
            }
        })
        return reservations;
    }
}

export default ReservationsRepository;