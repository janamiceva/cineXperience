import { TableCell, TableRow } from "@mui/material";
import useGetMovieByMovieId from "../hooks/use-get-movie";
import useGetScreening from "../hooks/use-get-screening";
import Moment from 'moment';

function TableRowForReservation ({reservation}: any) {
    console.log(reservation)

    const screening = useGetScreening(reservation.movieScreeningId).data
    const movie = useGetMovieByMovieId(screening?.movieId).data
    const date = screening?.dateAndTimeOfScreening
    return (
        <TableRow
            key={reservation.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="right">{movie?.name}</TableCell>
            <TableCell align="right">{movie?.duration}min</TableCell>
            <TableCell align="right">{screening?.cinemaHallId}</TableCell>
            <TableCell align="right">{Moment(date).format('d MMMM YYYY')}</TableCell>
            <TableCell align="right">{Moment(date).format('hh:mm a')}</TableCell>
            <TableCell align="right">{screening?.price}</TableCell>
            <TableCell align="right">{reservation?.status}</TableCell>
        </TableRow>
    )
}

export default TableRowForReservation;