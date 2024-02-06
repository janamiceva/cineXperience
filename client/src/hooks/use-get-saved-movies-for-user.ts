import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store"

const getSavedMoviesForUser = async (userId: string | undefined) => {
    const response = await axiosIntance.get(`/movies/savedMoviesForUser/${userId}`)
    return response.data
}

const useGetSavedMoviesForUser = ({onSuccess}: any) => {
    const userId = useUserStore().user?.uid;

    return useQuery(['savedMovies', userId], async () => await getSavedMoviesForUser(userId), {
        onSuccess
    })
}

export default useGetSavedMoviesForUser
