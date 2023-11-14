import { useMutation } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store"
import ReservationStatus from "../types/enum/reservation-status"

const reserveTicket = async (id: string, screeningId: number, userId: string | undefined) => {
    const statusOfReservation = ReservationStatus.INPROGRESS
    const newlyreserveTicket = await axiosIntance.post(`/reservations/${id}/${screeningId}`, { userId, statusOfReservation })
    return newlyreserveTicket.data
}

const useReserveTicket = (movieId: string) => {
    const userId = useUserStore().user?.uid;

    return useMutation((screeningId: number) => reserveTicket(movieId, screeningId, userId))
}

export default useReserveTicket