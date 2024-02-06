import { useMutation } from "react-query"
import { User } from "firebase/auth";
import { axiosIntance } from "../interceptors/auth-interceptor";

const signUp = async (user: User) => {
    const email = user.email
    const userId = user.uid
    const newUser = await axiosIntance.post('/users/signUp', { email, userId });
    return newUser.data;
}

const useSignUp = () => {
    return useMutation((user: User) => signUp(user));
}

export default useSignUp;
