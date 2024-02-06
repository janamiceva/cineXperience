import { useForm } from 'react-hook-form'
import type SignUpInput from '../types/sign-up-input'
import { useEffect, useRef, useState } from 'react'
import { onAuthStateChanged, createUserWithEmailAndPassword, type User } from 'firebase/auth'
import { auth } from './firebase-config'
import { type FirebaseError } from 'firebase/app'
import { FormControl } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AuthenticationForm from '../components/authentication-form/form'
import AuthenticationFormButton from '../components/authentication-form/button'
import AuthenticationTypography from '../components/authentication-form/typography'
import AuthenticationInput from '../components/authentication-form/input'
import { useSnackbar } from 'notistack'
import useSignUp from '../hooks/use-sign-up'

function SignUp() {
  const [_user, setUser] = useState<User | null>()
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: signUp } = useSignUp()
  const { register, handleSubmit } = useForm<SignUpInput>()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const registerUser = async (signUpInput: SignUpInput) => {

    try {
      const userInfo = await createUserWithEmailAndPassword(auth, signUpInput.email, signUpInput.password)
      const user = userInfo.user
      signUp(user)
      enqueueSnackbar({ message: "Successfully created account!", variant: 'success' })
      navigate('/homePage');
    } catch (error) {
      enqueueSnackbar({ message: (error as FirebaseError).message, variant: 'error' })
    }
  }

  return (
    <AuthenticationForm>
      <AuthenticationTypography>Sign up</AuthenticationTypography>
      <FormControl component="form" onSubmit={handleSubmit(registerUser)}>
        <AuthenticationInput label="Email" type='email' {...register("email", {
          required: {
            value: true,
            message: 'Your email is required'
          }
        })}
        />
        <AuthenticationInput label="Password" type="password" {...register("password", {
          required: {
            value: true,
            message: 'Your email is required'
          }
        })}
        />
        <AuthenticationFormButton type="submit" value="submit">Create an account</AuthenticationFormButton>
      </FormControl>

      <AuthenticationFormButton sx={(theme) => ({ position: 'absolute', bottom: theme.spacing(1) })} onClick={() => navigate('/signIn')}>Already have an account?</AuthenticationFormButton>
    </AuthenticationForm>
  )

}

export default SignUp

