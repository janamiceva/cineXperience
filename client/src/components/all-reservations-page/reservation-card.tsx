import { Card, CardMedia, CardContent, Typography, Box, Button, styled } from "@mui/material";
import Moment from 'moment';
import Reservation from "../../types/reservation";
import useGetScreening from "../../hooks/use-get-screening";
import useGetMovieByMovieId from "../../hooks/use-get-movie";
import useGetUserById from "../../hooks/use-get-user";
import ReservationStatus from "../../types/enum/reservation-status";

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'black',
}))

type ReservationCardProps = {
    reservation: Reservation,
}

function ReservationCard({ reservation }: ReservationCardProps) {
    const movieScreeningId = reservation?.movieScreeningId
    const seats = reservation?.seatsId
    const { data: screeningDetails } = useGetScreening(String(movieScreeningId))
    const { data: movieDetails } = useGetMovieByMovieId(screeningDetails?.movieId)
    const { data: user } = useGetUserById(reservation?.userId)

    const date = screeningDetails?.dateAndTimeOfScreening
    const totalPrice = (seats.length * screeningDetails?.price).toFixed(2)
    const pastReservation = Moment(date).format('YYYY-MM-DD').toString() < (new Date().toISOString().split('T')[0])

    return (
        <>
            <Card sx={{ width: 500, marginBottom: '15px', opacity: pastReservation ? 0.5 : 1 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Movie: {movieDetails?.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        User: {user?.user.email}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <StyledTypography><span style={{ color: 'red' }}>DATE: </span>{Moment(date).format('DD MMMM YYYY')}</StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>TIME: </span> {Moment(date).format('hh:mm a')}</StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>SEATS: </span>
                            {seats?.map((seat: number, i: number) => {
                                if (i !== reservation.seatsId.length - 1)
                                    return (<span>{seat}, </span>)
                                return (<span>{seat} </span>)
                            })}
                        </StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>PRICE: </span> ${totalPrice}</StyledTypography>
                        <StyledTypography><span style={{ color: 'red' }}>STATUS: </span>  <span style={{ color: reservation?.status === ReservationStatus.INPROGRESS ? 'red' : 'green' }}>{(reservation?.status).toUpperCase()}</span> </StyledTypography>
                    </Box>
                </CardContent>
            </Card >
        </>
    )
}

export default ReservationCard;