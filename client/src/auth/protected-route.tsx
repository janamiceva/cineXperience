import { type ReactElement } from 'react'
import { useUserStore } from '../store/user-store'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactElement
}

const ProtectedRoute = (props: Props) => {
  const userStore = useUserStore()
  const user = userStore.user
  if (!user) {
    return <Navigate to='/signIn'/>
  }
  return props.children
}

export default ProtectedRoute