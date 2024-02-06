import { Box, Typography, styled } from "@mui/material";
import useGetSavedMoviesForUser from "../../hooks/use-get-saved-movies-for-user"
import SavedMovieForUser from "../../types/saved-movie-for-user";
import MovieCard from "../now-showing-page/movie-card";

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(6.25),
    padding: theme.spacing(6.25),
    [theme.breakpoints.down('md')]: {
        padding: 0,
        marginTop: theme.spacing(8),
    }
}))


function SavedMovies() {

    const { data: savedMovies } = useGetSavedMoviesForUser({
        onSuccess: (data: SavedMovieForUser[]) => {
            console.log(data)
        },
    });

    return (
        <Container>
            <Typography sx={{ color: 'white', alignSelf: 'center' }} variant="h4">Saved Movies</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop: '30px' }}>
                {savedMovies?.map((movie: SavedMovieForUser) => (
                    <MovieCard key={movie.id} movieId={movie.movieId} />
                ))}
            </Box>
            {!savedMovies?.length ? <Typography variant="h4" sx={{ color: 'white', alignSelf: 'center' }}>You don't have saved movies</Typography> : null}
        </Container>
    )

}

export default SavedMovies