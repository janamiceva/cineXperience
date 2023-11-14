import { type ReactElement } from 'react'
import { useUserStore } from '../store/user-store'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactElement
}

const UnprotectedRoute = (props: Props) => {
  const userStore = useUserStore()
  const user = userStore.user
  if (!user) {
    return props.children
  }
  return <Navigate to='/movies' />
}

export default UnprotectedRoute