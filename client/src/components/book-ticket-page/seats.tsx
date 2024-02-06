import { Box, Button, styled } from "@mui/material"
import { useParams } from "react-router-dom";
import useGetSeatsForMovieScreening from "../../hooks/use-get-seats-for-movie-screening";
import SeatForMovieScreening from "../../types/seat";

export const Seat = styled(Button)(({ theme }) => ({
    color: 'black',
    height: theme.spacing(5),
    width: '12px',
    margin: '3px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px'
}))

type SeatsProps = {
    selectedSeats: number[],
    totalPrice: number,
    screeningPrice: number,
    onReservingAticket: (seats: number[], price: number) => void
}

function Seats({ selectedSeats, totalPrice, screeningPrice, onReservingAticket }: SeatsProps) {
    const movieScreeningId = useParams()
    const { data } = useGetSeatsForMovieScreening(movieScreeningId?.id as string);

    const selectSeat = (selectedSeatId: number) => {
        if (selectedSeats.includes(selectedSeatId)) {
            const updatedSelectedSeats = selectedSeats.filter((seatId) => seatId !== selectedSeatId);
            onReservingAticket(updatedSelectedSeats, (totalPrice - screeningPrice))
        } else {
            onReservingAticket([...selectedSeats, selectedSeatId], (totalPrice + screeningPrice))
        }
    }

    return (
        <Box sx={{ width: '605px', maxWidth: '605px', overflow: 'auto' }}>
            <Box sx={{ backgroundColor: '#444451', width: '100%', height: '8px', marginBottom: '40px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}></Box>
            <Box sx={{ paddingLeft: '18px' }}>
                {data?.map((seat: SeatForMovieScreening, i: number) => {
                    const isSelected = selectedSeats.includes(seat.seatId)
                    return (
                        <Seat key={seat.id} onClick={() => selectSeat(seat.seatId)} disabled={seat.status} sx={{ backgroundColor: seat.status ? 'red' : (isSelected ? 'orange' : '#444451') }}>
                            {seat?.seatId}
                        </Seat>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Seats;