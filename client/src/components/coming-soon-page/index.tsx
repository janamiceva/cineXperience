import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import useGetComingSoonMovies from '../../hooks/use-get-comming-soon-movies'
import Movie from '../../types/movie'
import ComingSoonMovieCard from './coming-soon-movie-card'


const Container = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6.25),
    padding: theme.spacing(6.25),
    [theme.breakpoints.down('md')]: {
        padding: 0,
        marginTop: theme.spacing(8),
    }
}))


function ComingSoonMovieList() {

    const { data: allMovies } = useGetComingSoonMovies();

    return (
            <Container>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {allMovies?.map((movie: Movie) => (
                            <ComingSoonMovieCard key={movie.id} movie={movie} />
                        ))}
                    </Box>
                </Box>
            </Container>
    )
}

export default ComingSoonMovieList;

