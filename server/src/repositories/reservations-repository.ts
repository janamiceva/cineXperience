import { prisma } from "../database";
import Reservation from "../types/reservation";

class ReservationsRepository {

    public static async getAllReservations(): Promise<Reservation[]> {
        const reservations = await prisma.reservation.findMany()
        return reservations;
    }

    public static async createReservation(userId: string, movieScreeningId: number, statusOfReservation: string, seats: number[]): Promise<Reservation> {
        const reservation = await prisma.reservation.create({
            data: {
                userId,
                movieScreeningId,
                status: statusOfReservation,
                seatsId: seats
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

    public static async deleteReservation(reservationId: number, seats: number[], movieScreeningId: number): Promise<Reservation> {
        const movie = await prisma.$transaction(async (tx) => {
            await tx.seatInMovieScreening.updateMany({
                where: {
                    movieScreeningId,
                    seatId: {
                        in: seats
                    }
                },
                data: {
                    status: false
                }
            })

            const deleteReservation = await tx.reservation.delete({
                where: {
                    id: reservationId
                }
            })
            return deleteReservation
        })
        return movie
    }
}

export default ReservationsRepository;
