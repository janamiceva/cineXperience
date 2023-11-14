import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import useGetMovies from '../hooks/use-get-movies'
import { signOut } from 'firebase/auth'
import { auth } from '../auth/firebase-config'
import { useNavigate } from 'react-router-dom'
import Movie from '../types/movie'

function MovieList() {
  const { data: allMovies } = useGetMovies()
  const navigate = useNavigate()

  const logOutUser = () => {
    signOut(auth);
    navigate('/signin');
  }

  const handleOnClickDetails = (id: number) => {
      navigate(`/movies/${id}`)
  }

  return (
    <>
      <button style={{ display: 'block' }} onClick={logOutUser}>Log out</button>
      <button style={{ display: 'block' }} onClick={() => navigate('/myReservations')}>My Reservations</button>


      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {allMovies?.map((movie: Movie) => (
          <Card key={movie.id} sx={{ maxWidth: 345, margin: '5px' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={movie.image}
              title={movie.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() =>handleOnClickDetails(movie.id)}>See details</Button>
              <Button size="small">Book ticket</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default MovieList;
