import { Box, Button, Typography } from "@mui/material";
import Movie from "../../../types/movie";
import { useNavigate } from "react-router-dom";

type CardProps = {
    title: string,
    src: string,
    movie: Movie
}

function Card({ title, src, movie }: CardProps) {
    const navigate = useNavigate()

    const seeDetailsforMovie = (movieId: number) => {
        navigate(`/movies/${movieId}`);
        window.scrollTo(0, 0)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            padding: '2rem',
            backgroundColor: 'hsl(0deg, 40%, calc(100% - var(--abs-offset) * 50%))',
            borderRadius: '1rem',
            color: 'var(--color-gray)',
            textAlign: 'justify',
            transition: 'all 0.3s ease-out',
            marginBottom: '100px',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant='h2' sx={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 0 0.5em',
                color: 'var(--color-black)',
                transition: 'all 0.3s ease-out',
                opacity: 'var(--active)',
            }}>{title}</Typography>
            <img src={src} style={{ width: '200px', height: '' }} />
            <Button onClick={() => seeDetailsforMovie(movie?.id)} sx={{ alignSelf: 'center', color: 'red', border: '1px solid red', marginTop: '10px' }}>See more</Button>
        </Box >
    );
}

export default Card;