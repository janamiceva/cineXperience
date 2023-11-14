import useGetMovieByMovieId from "../hooks/use-get-movie";
import { Box, Typography } from "@mui/material";

function HomePage() {

    const { data: movie } = useGetMovieByMovieId("20");
    console.log(movie)

    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{ position: "absolute", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgb(212, 64, 56)', top: '20%', fontSize: '50px', zIndex: 1 }}>
                    <span>Welcome to CineXperience, </span>
                    <span>where every seat reserves a gateway to Movie Magic!</span>
                </Typography>
        </Box>
    )
}
export default HomePage;