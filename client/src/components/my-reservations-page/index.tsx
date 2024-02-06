import { Box, Typography, styled } from "@mui/material";
import useGetAllReservationsForUser from "../../hooks/use-get-all-reservations-for-user";
import ReservationCard from "./reservation-card";
import Reservation from "../../types/reservation";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ModalForm from "../modal";
import { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(12.5),
    padding: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
        padding: 0,
    }
}))

function MyReservations() {
    const { data: allReservationsForUser } = useGetAllReservationsForUser()
    const [sucessfulModal, setsucessfulModal] = useState(false);


    return (
        <>
            <Container>
                {allReservationsForUser?.length ? allReservationsForUser?.map((reservation: Reservation) => (
                    <ReservationCard reservation={reservation} setsucessfulModal={setsucessfulModal}/>
                )): null}
                {!allReservationsForUser?.length ? <Typography variant="h4" sx={{color: 'white'}}>You don't have reservations</Typography> : null}
            </Container>
            <ModalForm sx={{ display: 'flex' }} open={sucessfulModal} handleClose={setsucessfulModal}>
                    <CheckCircleIcon sx={(theme) => ({ color: 'green', paddingRight: theme.spacing(1) })} />
                    <Typography sx={{ display: 'inline' }}>
                        You have successfully canceled your reservation.
                    </Typography>
            </ModalForm>
        </>
    )
}

export default MyReservations;