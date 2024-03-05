import Reservation from '../../types/reservation';
import useGetAllReservations from '../../hooks/use-get-all-reservations';
import { Box, Typography, styled } from '@mui/material';
import ReservationCard from './reservation-card';

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

function AllReservations() {
    const {data: reservations} = useGetAllReservations();

    return (
        <div>
            <h1>All Reservations</h1>
            <Container>
                {reservations?.length ? reservations?.map((reservation: Reservation) => (
                    <ReservationCard reservation={reservation} />
                )): null}
                {!reservations?.length ? <Typography variant="h4" sx={{color: 'white'}}>There are no reservations</Typography> : null}
            </Container>
        </div>
    );
};

export default AllReservations;