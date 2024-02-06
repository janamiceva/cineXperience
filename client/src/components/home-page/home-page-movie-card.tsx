import { Card, CardMedia, CardContent, Tooltip, Typography, styled } from "@mui/material";
import Movie from "../../types/movie";


const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 200,
    height: 250,
    background:
        'transparent',
    color: 'white',
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('md')]: {
        maxWidth: 400,
        width: 400,
        padding: theme.spacing(0),
    }
}))

type HomePageMovieCardProps = {
    movie: Movie,
}

function HomePageMovieCard({ movie }: HomePageMovieCardProps) {
    return (
        <StyledCard key={movie.id}>
            <CardMedia
                component="img"
                height="150"
                width="300"
                image={movie.image}
                sx={{ borderRadius: 2 }}
            />
            <CardContent sx={{ height: 32 }}>
                <Tooltip title={movie.name}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ height: 32, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {movie.name}
                    </Typography>
                </Tooltip>
            </CardContent>
        </StyledCard>
    )
}

export default HomePageMovieCard;