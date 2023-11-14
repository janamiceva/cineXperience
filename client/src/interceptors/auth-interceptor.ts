import axios from "axios";
import { useUserStore } from "../store/user-store";

export const axiosIntance = axios.create({
    baseURL: 'http://localhost:3001'
})

axiosIntance.interceptors.request.use((request) => {
    const token = useUserStore.getState().user?.accessToken
    request.headers.Authorization = "Bearer " + token
    return request
})

