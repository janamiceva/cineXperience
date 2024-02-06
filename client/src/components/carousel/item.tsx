import { useMediaQuery, Paper, Box, Button, Theme, Typography, Rating, Tooltip, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Movie from "../../types/movie";

const StyledButton = styled(Button)(({ theme }) => ({
    variant: "outlined",
    fontWeight: 'bolder',
    width: 'max-content',
}))

type CarouselItemProps = {
    item: Movie,
    image: string,
}

function CarouselItem({ item, image }: CarouselItemProps) {

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const navigate = useNavigate()


    const handleOnClickDetails = (id: number) => {
        navigate(`/movies/${id}`)
    }

    const rating = item?.rating / 2.0

    return (
        <Paper sx={{ height: '300px', background: 'black' }}>
            {isDesktop ? (<Box sx={{ display: 'flex', height: 'inherit', justifyContent: 'space-around' }}>
                <img src={image} style={{ width: '500px' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%', textAlign: 'center', padding: '2%', right: 0, justifyContent: 'space-between' }}>
                    <Typography variant="h1" style={{ color: 'white', fontSize: '2rem', fontWeight: "bold" }}>{item.name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Tooltip title={`${rating}/5`} placement="top-start">
                            <span>
                                <Rating defaultValue={rating} precision={0.1} readOnly />
                            </span>
                        </Tooltip>
                        <Typography sx={{ color: 'white' }}>{item?.duration}min</Typography>
                    </Box>
                    <Typography style={{ color: 'white', height: '30%', marginTop: '10px' }}>{item.description}</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <StyledButton onClick={() => handleOnClickDetails(item.id)} sx={{ color: 'white', border: '1px solid white' }}>See More</StyledButton>
                        <StyledButton sx={{ color: 'red', border: '1px solid red' }}>Book now</StyledButton>
                    </Box>
                </Box>
            </Box>) : (<img src={image} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }} />)}
        </Paper>
    )
}

export default CarouselItem;