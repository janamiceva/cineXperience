import { useForm } from "react-hook-form";
import SignInInput from "../types/sign-in-input";
import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import axios from "axios";
import useGetUsers from "../hooks/use-get-users";
import { User } from "../types/user";
import { Box, Button, FormControl, styled } from "@mui/material";
import AuthenticationForm from "../components/authentication-form/form";
import AuthenticationFormButton from "../components/authentication-form/button";
import AuthenticationTypography from "../components/authentication-form/typography";
import AuthenticationInput from "../components/authentication-form/input";
import GoogleIcon from "../static/icons/google-icon";
import FacebookIcon from "../static/icons/facebook-icon";
import { useSnackbar } from "notistack";

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(1, 0)
}))

function SignIn() {

  const { register, handleSubmit } = useForm<SignInInput>();
  const navigate = useNavigate();
  const users = useGetUsers()?.data?.users;
  const { enqueueSnackbar } = useSnackbar();


  const signInUser = async (signInInput: SignInInput) => {
    try {
      await signInWithEmailAndPassword(auth, signInInput.email, signInInput.password);
      navigate('/homePage');
    } catch (error) {
      enqueueSnackbar({ message: (error as FirebaseError).message, variant: 'error' })
    }

  }

  const signInUserWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
      const userId = user.user.uid;
      const existingUser = users?.filter((u: User) => u.email === user.user.email)
      if (existingUser.length === 0)
        axios.post('http://localhost:3001/users/signUp', { user, userId });
      navigate('/homePage');
    } catch (error) {
      enqueueSnackbar({ message: (error as FirebaseError).message, variant: 'error' })
    }
  }

  const signInUserWithFacebook = async () => {
    try {
      const user = await signInWithPopup(auth, new FacebookAuthProvider());
      const userId = user.user.uid;
      const existingUser = users?.filter((u: User) => u.email === user.user.email)
      if (existingUser.length === 0)
        axios.post('http://localhost:3001/users/signUp', { user, userId });
      navigate('/homePage');
    } catch (error) {
      enqueueSnackbar({ message: (error as FirebaseError).message, variant: 'error' })
    }
  }

  return (
    <>
      <AuthenticationForm>
        <AuthenticationTypography>Sign in</AuthenticationTypography>
        <FormControl  component="form" onSubmit={handleSubmit(signInUser)}>
          <AuthenticationInput label="Email" type="email"
            {...register("email", {
              required: {
                value: true,
                message: 'Your email is required'
              }
            })} />
          <AuthenticationInput label="Password" type="password"
          {...register("password", {
            required: {
              value: true,
              message: 'Your email is required'
            }
          })} />
          <AuthenticationFormButton type="submit" value="submit">Sign In</AuthenticationFormButton>
        </FormControl>
        <StyledBox>
          <StyledBox>
            <GoogleIcon />
            <AuthenticationFormButton onClick={signInUserWithGoogle}>Sign in with google</AuthenticationFormButton>
          </StyledBox>
          <StyledBox>
            <AuthenticationFormButton onClick={signInUserWithFacebook}>Sign in with facebook</AuthenticationFormButton>
            <FacebookIcon />
          </StyledBox>
        </StyledBox>
        <AuthenticationFormButton sx={(theme) => ({ position: 'absolute', bottom: theme.spacing(1) })} onClick={() => navigate('/signUp')}>Don't have an account?</AuthenticationFormButton>

      </AuthenticationForm>
    </>
  )
}

export default SignIn;