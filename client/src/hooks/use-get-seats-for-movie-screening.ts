import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getSeatsForMovieScreening= async (movieScreeningId: string) => {
    const seatsForMovieScreening = await axiosIntance.get(`/seatsInMovieScreening/${movieScreeningId}`)
    return seatsForMovieScreening.data.seatsInMovieScreening
}

const useGetSeatsForMovieScreening = (movieScreeningId: string) => {
    return useQuery(["seatsForMovieScreening", movieScreeningId], () => getSeatsForMovieScreening(movieScreeningId))
}

export default useGetSeatsForMovieScreening;