import { useQuery } from "react-query";
import { axiosIntance } from "../interceptors/auth-interceptor";

const getAllScreeningsForMovie = async (movieId: string) => {
    const screeningsForMovie = await axiosIntance.get(`/movieScreenings/movie/${movieId}`)
    return screeningsForMovie.data
}

const useGetAllScreeningsForMovie = (movieId: string) => {
    return useQuery(['movieScreenings', movieId], () => getAllScreeningsForMovie(movieId))
}

export default useGetAllScreeningsForMovie;