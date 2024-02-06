import { useEffect } from 'react'
import './App.css'
import SignIn from './auth/sign-in'
import SignUp from './auth/sign-up'
import MovieList from './components/now-showing-page'
import { Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './store/user-store'
import { User } from './types/user'
import { auth } from './auth/firebase-config'
import ProtectedRoute from './auth/protected-route'
import HomePage from './components/home-page'
import LayoutForAuthPage from './components/layout/layout-for-auth-pages'
import MovieDetailPage from './components/movie-detail-page/index'
import AboutUs from './components/about-us-page'
import BookTicket from './components/book-ticket-page'
import MyReservations from './components/my-reservations-page'
import Layout from './components/layout/layout'
import SavedMovies from './components/saved-movies-page'
import ComingSoonMovieList from './components/coming-soon-page'

function App() {

  const userStore = useUserStore()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      userStore.setUser(currentUser as User)
    })
  }, [])


  return (
    <Routes>
      <Route path='/' element={<Layout><HomePage /></Layout>} />
      <Route path='/signUp' element={<LayoutForAuthPage><SignUp /></LayoutForAuthPage>} />
      <Route path='/signIn' element={<LayoutForAuthPage><SignIn /></LayoutForAuthPage>} />
      <Route path='/homePage' element={<Layout><HomePage /></Layout>} />
      <Route path='/movies' element={<Layout><MovieList /></Layout>} />
      <Route path='/comingSoonMovies' element={<Layout><ComingSoonMovieList /></Layout>} />
      <Route path='/savedMovies' element={<Layout><ProtectedRoute><SavedMovies /></ProtectedRoute></Layout>} />
      <Route path='/movies/:id' element={<Layout><MovieDetailPage /></Layout>} />
      <Route path='/aboutUs' element={<Layout><AboutUs /></Layout>} />
      <Route path='/bookTicket/:id' element={<Layout><ProtectedRoute><BookTicket /></ProtectedRoute></Layout>} />
      <Route path='/myReservations' element={<Layout><ProtectedRoute><MyReservations /></ProtectedRoute></Layout>} />
    </Routes>
  )
}

export default App
