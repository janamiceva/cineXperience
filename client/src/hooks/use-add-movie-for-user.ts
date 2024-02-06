import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store";
import SavedMovieForUser from "../types/saved-movie-for-user";

const addMovieForUser = async (movieId: string, userId: string | undefined) => {
    const addMovieForUser = await axiosIntance.post(`/movies/save/${movieId}/${userId}`);
    return addMovieForUser.data;
}

const useAddMovieForUser = (movieId: string) => {
    const client = useQueryClient();
    const userId = useUserStore().user?.uid;

    return useMutation(() => addMovieForUser(movieId, userId), {
        onSuccess: (data) => {
            const savedMovies: SavedMovieForUser[] | undefined = client.getQueryData(['savedMovies', userId]);
            if (savedMovies) {
                const savedMoviesForUser = [...savedMovies, data]
                client.setQueryData(['savedMovies', userId], savedMoviesForUser);
            }

        }
    });
}

export default useAddMovieForUser;