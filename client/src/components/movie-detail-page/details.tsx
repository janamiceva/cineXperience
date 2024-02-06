import { Typography, Box, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetMovieByMovieId from "../../hooks/use-get-movie";
import StarIcon from '@mui/icons-material/Star';

const Container = styled(Box)(({ theme }) => ({
    width: '50%',
    border: '1px solid white',
    borderRadius: 2,
    padding: theme.spacing(2.5),
    [theme.breakpoints.down('md')]: {
        width: '70%',
        marginTop: theme.spacing(2),
    }
}))

const StyledDetailHeader = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    display: 'inline',
    paddingRight: theme.spacing(1.5),
}))

const StyledDetailContent = styled(Typography)({
    color: 'darkGrey',
    display: 'inline'
})

function MovieDetails() {
    const { id } = useParams()
    const { data: movie } = useGetMovieByMovieId(id as string)

    return (
        <Container>
            <StyledDetailContent>{movie?.description}</StyledDetailContent>
            <hr />
            <StyledDetailHeader>Director:</StyledDetailHeader>
            <StyledDetailContent>{movie?.director}</StyledDetailContent>
            <hr />
            <StyledDetailHeader>Duration:</StyledDetailHeader>
            <StyledDetailContent>{movie?.duration}min</StyledDetailContent>
            <hr />
            <StyledDetailHeader>Genre: </StyledDetailHeader>
            {movie?.genre?.map((genre: string, i: number) => {
                if (i !== movie.genre.length - 1)
                    return (<StyledDetailContent>{genre}, </StyledDetailContent>)
                return (<StyledDetailContent>{genre} </StyledDetailContent>)
            })}
            <hr />
            <StyledDetailHeader>Cast: </StyledDetailHeader>
            {movie?.cast?.map((cast: string, i: number) => {
                if (i !== movie.cast.length - 1)
                    return (<StyledDetailContent>{cast}, </StyledDetailContent>)
                return (<StyledDetailContent>{cast} </StyledDetailContent>)
            })}
            <hr />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <StyledDetailHeader>Rating:</StyledDetailHeader>
                <StyledDetailContent>{movie?.rating} / 10</StyledDetailContent>
                <StarIcon sx={{ fill: 'yellow' }} />
            </Box>
        </Container>
    )
}

export default MovieDetails;