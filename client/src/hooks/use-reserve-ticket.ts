import { useMutation } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store"
import ReservationStatus from "../types/enum/reservation-status"

type ReservationValues = {
    screeningId: string,
    selectedSeats: number[],
    paymentMethod: string
}

const reserveTicket = async ({ screeningId, selectedSeats, paymentMethod }: ReservationValues, userId: string | undefined) => {
    const seats = selectedSeats
    let statusOfReservation = ReservationStatus.INPROGRESS
    if (paymentMethod.match('card'))
        statusOfReservation = ReservationStatus.PAID
    else
        statusOfReservation = ReservationStatus.INPROGRESS
    const newlyreserveTicket = await axiosIntance.post(`/reservations/create/${screeningId}`, { userId, statusOfReservation, seats })
    return newlyreserveTicket.data
}

const useReserveTicket = () => {
    const userId = useUserStore().user?.uid;

    return useMutation((values: ReservationValues) => reserveTicket(values, userId))
}

export default useReserveTicket