import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"


const getAllReservations = async () => {
    const reservations = await axiosIntance.get(`/reservations`)
    return reservations.data
}

const useGetAllReservations = () => {
    return useQuery('reservations', async () => await getAllReservations())
}

export default useGetAllReservations