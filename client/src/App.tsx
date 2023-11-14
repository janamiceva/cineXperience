import { useEffect } from 'react'
import './App.css'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'
import MovieList from './components/movie-list'
import { Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './store/user-store'
import { User } from './types/user'
import { auth } from './auth/firebase-config'
import UnprotectedRoute from './auth/unprotected-route'
import ProtectedRoute from './auth/protected-route'
import MovieDetail from './components/movie-detail'
import MyReservations from './components/my-reservations'
import HomePage from './components/home-page'
import Layout from './components/layout'

function App() {

  const userStore = useUserStore()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      userStore.setUser(currentUser as User)
    })
  }, [])


  return (
    <Routes>
      <Route path='/signUp' element={<UnprotectedRoute><Layout><SignUp /></Layout></UnprotectedRoute>} />
      <Route path='/signIn' element={<UnprotectedRoute><Layout><SignIn /></Layout></UnprotectedRoute>} />
      <Route path='/homePage' element={<Layout><HomePage /></Layout>}/>
      <Route path='/movies' element={<MovieList />} />
      <Route path='/movies/:id' element={<ProtectedRoute><MovieDetail /></ProtectedRoute>} />
      <Route path='/myReservations' element={<ProtectedRoute><MyReservations /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
