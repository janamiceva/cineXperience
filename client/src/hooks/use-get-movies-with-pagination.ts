import { useQuery } from 'react-query'
import { axiosIntance } from '../interceptors/auth-interceptor'

const getMovies = async (currentPage: number) => {
  const response = await axiosIntance.get('/movies/pagination', { params: { currentPage } })
  return response.data
}

const useGetMoviesPagination = (currentPage: number) => {
  return useQuery(['movies', currentPage], async () => await getMovies(currentPage))
}

export default useGetMoviesPagination
