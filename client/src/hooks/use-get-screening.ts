import { useQuery } from "react-query";
import { axiosIntance } from "../interceptors/auth-interceptor";

const getScreening = async (screeningId: string) => {
    const screening = await axiosIntance.get(`/movieScreenings/${screeningId}`)
    return screening.data
}

const useGetScreening = (screeningId: string) => {

    return useQuery(['screening', screeningId], () => getScreening(screeningId))
}

export default useGetScreening;