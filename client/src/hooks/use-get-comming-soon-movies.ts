import { useQuery } from 'react-query'
import { axiosIntance } from '../interceptors/auth-interceptor'

const getComingSoonMovies = async () => {
  const response = await axiosIntance.get('/movies/comingSoon')
  return response.data
}

const useGetComingSoonMovies = () => {
  return useQuery('comingSoonMovies', async () => await getComingSoonMovies())
}

export default useGetComingSoonMovies
