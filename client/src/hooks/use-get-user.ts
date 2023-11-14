import axios from "axios"
import { useQuery } from "react-query"
import { useUserStore } from "../store/user-store"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getUserById = async (id: string | undefined) => {
    const response = await axiosIntance.get(`/users/${id}`)
    return response.data
}

const useGetUserById = (userId: string) => {
    return useQuery(['users', userId], () => getUserById(userId))
}

export default useGetUserById;