import { Box, Typography } from '@mui/material';
import Movie from '../../../types/movie';
import Card from './card';
import Carousel from './carousel';
import { useParams } from 'react-router-dom';
import useGetMovieByMovieId from '../../../hooks/use-get-movie';
import useGetMovieByGenre from '../../../hooks/use-get-movie-by-genre';

function CarouselMovies() {
    const { id } = useParams()
    const { data: currentMovie } = useGetMovieByMovieId(id as string)
    const { data: movies } = useGetMovieByGenre(currentMovie?.genre[0]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" style={{ color: 'white', paddingBottom: 30 }}>Recommendations </Typography>
            <Carousel>
                {movies
                    ?.filter((movie: Movie) => movie?.id !== currentMovie?.id)
                    .map((filteredMovie: Movie) => (
                        <Card key={filteredMovie.id} title={filteredMovie.name} src={filteredMovie.image} movie={filteredMovie}/>
                    ))}
            </Carousel>
        </Box>
    )
};

export default CarouselMovies
