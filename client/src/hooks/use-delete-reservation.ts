import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { auth } from "../auth/firebase-config"
import Reservation from "../types/reservation"

type ValuesForDeletingReservation = {
    reservationId: number,
    movieScreeningId: number,
    seats: number[]
}

const deleteReservationForUser = async ({ reservationId, movieScreeningId, seats }: ValuesForDeletingReservation) => {
    const deletedReservation = await axiosIntance.delete(`/reservations/delete/${reservationId}/${movieScreeningId}/${seats}`)
    return deletedReservation.data
}

const useDeleteReservation = () => {
    const client = useQueryClient();
    const userId = auth.currentUser?.uid

    return useMutation(deleteReservationForUser, {
        onSuccess: (deletedReservation) => {
            const reservations: Reservation[] | undefined = client.getQueryData(["reservations", userId])
            if (reservations) {
                const reservationsForUser = reservations.filter((reservation: Reservation) => {
                    if (deletedReservation.id !== reservation.id)
                        return reservation
                })
                client.setQueryData(["reservations", userId], reservationsForUser)
            }
        }
    })
}

export default useDeleteReservation