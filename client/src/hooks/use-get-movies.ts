import axios from 'axios'
import { useQuery } from 'react-query'
import { axiosIntance } from '../interceptors/auth-interceptor'

const getMovies = async () => {
  const response = await axiosIntance.get('/movies')
  return response.data
}

const useGetMovies = () => {
  return useQuery('movies', async () => await getMovies())
}

export default useGetMovies
