import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store";
import SavedMovieForUser from "../types/saved-movie-for-user";

const deleteSavedMovieForUser = async (movieId: string, userId: string | undefined) => {
    const deletedSavedMovieForUser = await axiosIntance.delete(`/movies/deleteSavedMovieForUser/${movieId}/${userId}`);
    return deletedSavedMovieForUser.data;
}

const useDeleteSavedMovieForUser = (movieId: string) => {
    const client = useQueryClient();
    const userId = useUserStore().user?.uid;

    return useMutation(() => deleteSavedMovieForUser(movieId, userId), {
        onSuccess: (deletedMovie) => {
            const deletedSavedMovies: SavedMovieForUser[] | undefined = client.getQueryData(['savedMovies', userId]);
            if (deletedSavedMovies) {
                const deletedSavedMoviesForUser = deletedSavedMovies.filter((savedMovie: SavedMovieForUser) => {
                    if (deletedMovie.movieId !== savedMovie.movieId)
                        return savedMovie
                })
                client.setQueryData(['savedMovies', userId], deletedSavedMoviesForUser);
            }

        }
    });
}

export default useDeleteSavedMovieForUser;