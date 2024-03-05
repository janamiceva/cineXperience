import { Box, Button, Typography, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useGetMovieByMovieId from "../../hooks/use-get-movie";
import YouTubeVideo from "../youtube";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieDetails from "./details";
import CommentsList from "./comments";
import MovieScreeningTable from "./movie-screening-table";
import CarouselMovies from "./recommendations/movies-recommendation";

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '100px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

const StyledContainer = styled(Box)(({ theme }) => ({
    marginTop: '90px',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: 'black',
    [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        paddingRight: 0,
    }
}))

function MovieDetailPage() {
    const { id } = useParams()
    const { data: movie } = useGetMovieByMovieId(id as string)
    const navigate = useNavigate()

    return (
            <StyledContainer>
                <Button onClick={() => navigate('/homePage')}><ArrowBackIcon sx={{ color: 'white' }} /></Button>
                <Typography variant="h3" sx={{ color: 'white', textAlign: 'center' }}>{movie?.name}</Typography>
                <YouTubeVideo videoId={movie?.videoId} />

                <StyledBox>
                    <img src={movie?.image} style={{ height: '350px' }} />
                    <MovieDetails />
                </StyledBox >
                <MovieScreeningTable />

                <Container>
                    <CarouselMovies />
                    <CommentsList />
                </Container>
            </StyledContainer>
    )
}

export default MovieDetailPage;