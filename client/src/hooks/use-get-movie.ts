import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getMovieByMovieId = async (id: string) => {
    const movie = await axiosIntance.get(`/movies/${id}`)
    return movie.data
}

const useGetMovieByMovieId = (movieId: string) => {
    return useQuery(['movies', movieId], () => getMovieByMovieId(movieId))
}

export default useGetMovieByMovieId;