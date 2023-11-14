import { useQuery } from "react-query"
import { useUserStore } from "../store/user-store"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getAllReservationsForUser = async (userId: string | undefined) => {
    const reservations = await axiosIntance.get(`/reservations/${userId}`)
    return reservations.data
}

const useGetAllReservationsForUser = () => {
    const userId = useUserStore().user?.uid
    return useQuery(["reservations", userId], () => getAllReservationsForUser(userId))
}

export default useGetAllReservationsForUser;