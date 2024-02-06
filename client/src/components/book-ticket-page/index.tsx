import { Box, Button, Typography, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useGetScreening from "../../hooks/use-get-screening";
import useGetMovieByMovieId from "../../hooks/use-get-movie";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Moment from 'moment';
import BookingDetailsTable from "./booking-details-table";
import Seats, { Seat } from "./seats";

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
    }
}))

const StyledContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6.25),
    display: 'flex',
    marginBottom: theme.spacing(4),
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        marginTop: theme.spacing(1.25),
    },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    paddingTop: theme.spacing(1.875)
}))

const StyledContainerForSeatsTemplate = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(3)
    }
}))



function BookTicket() {
    const movieScreeningId = useParams()

    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const { data: screeningDetails } = useGetScreening(movieScreeningId?.id as string)
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const { data: movie } = useGetMovieByMovieId(screeningDetails?.movieId);
    const navigate = useNavigate()

    const handleUpdatingData = (seats: number[], price: number) => {
        setSelectedSeats(seats)
        setTotalPrice(price)
    }

    const date = screeningDetails?.dateAndTimeOfScreening

    return (
        <>
            <Container>
                <Box sx={{ marginTop: '90px', paddingLeft: '50px', paddingRight: '50px', backgroundColor: 'black' }}>
                    <Button onClick={() => navigate(`/movies/${screeningDetails?.movieId}`)}><ArrowBackIcon sx={{ color: 'white' }} /></Button>
                </Box>
                <StyledContainer>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h2" sx={{ color: 'white' }}>{movie?.name}</Typography>
                        <StyledTypography><span style={{ color: 'red' }}>DATE: </span>{Moment(date).format('DD MMMM YYYY')}</StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>TIME: </span> {Moment(date).format('hh:mm a')}</StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>PRICE: </span>${screeningDetails?.price}</StyledTypography>
                    </Box>
                    <img src={movie?.image} style={{ width: '500px', height: 'auto' }} />
                </StyledContainer>
                <StyledContainer sx={{ alignItems: 'center' }}>
                    <StyledContainerForSeatsTemplate>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Seat disabled sx={{ backgroundColor: '#444451' }} />
                            <Typography sx={{ color: '#444451' }}>Free</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Seat disabled sx={{ backgroundColor: 'orange' }} />
                            <Typography sx={{ color: 'orange' }}>Selected</Typography>

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Seat disabled sx={{ backgroundColor: 'red' }} />
                            <Typography sx={{ color: 'red' }}>Reserved</Typography>
                        </Box>
                    </StyledContainerForSeatsTemplate>
                    <Seats selectedSeats={selectedSeats} totalPrice={totalPrice} screeningPrice={screeningDetails?.price} onReservingAticket={handleUpdatingData} />
                    <BookingDetailsTable selectedSeats={selectedSeats} totalPrice={totalPrice} movieName={movie?.name} onReservingAticket={handleUpdatingData} />
                </StyledContainer>
            </Container>
        </>
    )
}


export default BookTicket;