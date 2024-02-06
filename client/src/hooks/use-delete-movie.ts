import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import Movie from "../types/movie"

const deleteMovie = async (movieId: number) => {
    const deletedMovie = await axiosIntance.delete(`/movies/delete/${movieId}`)
    return deletedMovie.data
}

const useDeleteMovie = () => {
    const client = useQueryClient();

    return useMutation((movieId: number) => deleteMovie(movieId), {
        onSuccess: (deletedMovie) => {
            const movies: Movie[] | undefined = client.getQueryData('movies')
            if (movies) {
                const nowShowingMovies = movies.filter((movie: Movie) => {
                    if (deletedMovie.id !== movie.id)
                        return movie
                })
                client.setQueryData('movies', nowShowingMovies)
            }
        }
    })
}

export default useDeleteMovie