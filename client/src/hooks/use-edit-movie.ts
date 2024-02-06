import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { MovieInput } from "../types/movie-input";
import Movie from "../types/movie";


const editMovie = async (inputValues: MovieInput) => {
    const movieId = inputValues.movieId
    const name = inputValues.name
    const genre = inputValues.genre
    const description = inputValues.description
    const duration = inputValues.duration
    const director = inputValues.director
    const rating = inputValues.rating
    const cast = inputValues.cast
    const image = inputValues.image
    const videoId = inputValues.videoId
    const editedMovie = await axiosIntance.patch(`/movies/edit/${movieId}`, { name, genre, description, director, duration, image, rating, cast, videoId });
    return editedMovie.data;
}

const useEditMovie = () => {
    const client = useQueryClient();

    return useMutation(editMovie, {
        onSuccess: (editedMovie) => {
            const movies: Movie[] | undefined = client.getQueryData('movies');
            if (movies) {
                const nowShowingMovies = movies.map((movie: Movie) => {
                    if (movie.id === editedMovie.id) {
                        return editedMovie;
                    }
                    return movie;
                });
                client.setQueryData('movies', nowShowingMovies);
            }
        }
    });
}

export default useEditMovie;
