import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getAllCommentsForMovie = async (movieId: string) => {
    const commentForMovie = await axiosIntance.get(`/comments/${movieId}`)
    return commentForMovie.data
} 


const useGetAllCommentsForMovie = (movieId: string) => {

    return useQuery(['movieComments', movieId], () => getAllCommentsForMovie(movieId))
}

export default useGetAllCommentsForMovie;