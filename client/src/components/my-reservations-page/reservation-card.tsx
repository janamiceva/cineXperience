import { Card, CardMedia, CardContent, Typography, styled, Box, Button } from "@mui/material"
import QRcode from '../../static/images/QRcode.png'
import Reservation from "../../types/reservation"
import useGetScreening from "../../hooks/use-get-screening"
import Moment from 'moment';
import useGetMovieByMovieId from "../../hooks/use-get-movie"
import useDeleteReservation from "../../hooks/use-delete-reservation";
import ModalForm from "../modal";
import { useState } from "react";

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: 'black',
}))

type ReservationCardProps = {
    reservation: Reservation,
    setsucessfulModal: (success: boolean) => void
}

function ReservationCard({ reservation, setsucessfulModal }: ReservationCardProps) {
    const movieScreeningId = reservation?.movieScreeningId
    const seats = reservation?.seatsId
    const { data: screeningDetails } = useGetScreening(String(movieScreeningId))
    const { data: movieDetails } = useGetMovieByMovieId(screeningDetails?.movieId)
    const { mutateAsync: deleteReservation } = useDeleteReservation()
    const [cencelationModal, setCencelationModal] = useState(false)

    const cancelReservation = () => {
        const reservationId = reservation?.id
        deleteReservation({ reservationId, movieScreeningId, seats })
        setCencelationModal(false);
        setsucessfulModal(true);
    }

    const date = screeningDetails?.dateAndTimeOfScreening
    const totalPrice = (seats.length * screeningDetails?.price).toFixed(2)
    const pastReservation = Moment(date).format('YYYY-MM-DD').toString() < (new Date().toISOString().split('T')[0])


    return (
        <>
            <Card sx={{ maxWidth: 275, marginBottom: '15px', opacity: pastReservation ? 0.5 : 1 }}>
                <CardMedia
                    component="img"
                    height="266"
                    image={QRcode}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movieDetails?.name}
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
                        <StyledTypography><span style={{ color: 'red' }}>STATUS: </span> {reservation?.status}</StyledTypography>
                        {!pastReservation && (<Button sx={{ color: 'red', fontWeight: 'bold', border: '2px solid red', marginTop: '20px' }} onClick={() => setCencelationModal(true)}>Cancel reservation</Button>)}
                    </Box>
                </CardContent>
            </Card >
            <ModalForm open={cencelationModal} handleClose={setCencelationModal}>
                <Typography sx={{ display: 'inline' }}>
                    Are you sure you want to cancel your reservation for {movieDetails?.name}?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button sx={{ color: 'green' }} onClick={cancelReservation}>OK</Button>
                    <Button sx={{ color: 'red' }} onClick={() => setCencelationModal(false)}>Cancel</Button>
                </Box>
            </ModalForm>
        </>
    )
}

export default ReservationCard