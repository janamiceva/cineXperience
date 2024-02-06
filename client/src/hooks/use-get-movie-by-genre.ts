import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getMovieByGenre = async (genre: string) => {
    const movies = await axiosIntance.get(`/movies/genre/${genre}`)
    return movies.data
}

const useGetMovieByGenre = (genre: string) => {
    return useQuery(['movies', genre], () => getMovieByGenre(genre))
}

export default useGetMovieByGenre;