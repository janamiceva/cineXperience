import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getMoviesByQueryString = async (query: string) => {
    const movies = await axiosIntance.get(`/movies/search/${query}`)
    return movies.data
}

const useGetMoviesByQueryString = (query: string) => {
    return useQuery(['movies', query], () => getMoviesByQueryString(query))
}

export default useGetMoviesByQueryString;