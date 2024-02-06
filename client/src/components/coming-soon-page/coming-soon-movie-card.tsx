import { Box, CardContent, CardMedia, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import Movie from "../../types/movie";
import StarIcon from '@mui/icons-material/Star';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 300,
    width: 300,
    backgroundColor: "black",
    cursor: "pointer",
    padding: 10,
    [theme.breakpoints.down('md')]: {
        maxWidth: 400,
        width: 400,
        padding: theme.spacing(0),
    }
}))

type CardProps = {
    movie: Movie;
};

function ComingSoonMovieCard({ movie }: CardProps) {

    const openYouTubeVideo = () => {
        const youtubeUrl = `https://www.youtube.com/watch?v=${movie.videoId}`;
        window.open(youtubeUrl, '_blank');
    };

    return (
            <StyledCard >
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={movie?.image}
                        title={movie?.name}
                        onClick={openYouTubeVideo}
                    />
                </Box>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        sx={{ color: "white", fontWeight: 'bold' }}
                    >
                        {movie?.name}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ color: "white", display: 'inline' }}>Rating: {movie?.rating} / 10</Typography>
                        <StarIcon sx={{ fill: 'yellow' }} />
                    </Box>
                </CardContent>
            </StyledCard>
    );
}

export default ComingSoonMovieCard;
