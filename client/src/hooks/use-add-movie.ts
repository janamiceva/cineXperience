import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import Movie from "../types/movie";
import { MovieInput } from "../types/movie-input";

const addCommentForMovie = async (inputValues: MovieInput) => {
    const name = inputValues.name
    const genre = inputValues.genre
    const description = inputValues.description
    const duration = inputValues.duration
    const director = inputValues.director
    const rating = inputValues.rating
    const cast = inputValues.cast
    const image = inputValues.image
    const videoId = inputValues.videoId
    const newMovie = await axiosIntance.post('/movies', { name, genre, description, director, duration, image, rating, cast, videoId });
    return newMovie.data;
}

const useAddMovie = () => {
    const client = useQueryClient();

    return useMutation((inputValues: MovieInput) => addCommentForMovie(inputValues), {
        onSuccess: (data: Movie) => {
            const movies: Movie[] | undefined = client.getQueryData('movies');
            if (movies) {
                const allMovies = [...movies, data]
                client.setQueryData('movies', allMovies);
            }

        }
    });
}

export default useAddMovie;
