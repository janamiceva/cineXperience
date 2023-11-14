import axios from "axios"
import { useQuery } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"

const getUsers = async () => {
    const response = await axiosIntance.get('/users')
    return response.data
}

const useGetUsers = () => {
    return useQuery('users', getUsers)
}

export default useGetUsers;