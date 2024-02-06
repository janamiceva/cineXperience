import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from "@mui/material";
import Moment from 'moment';
import useGetAllScreeningsForMovie from "../../hooks/use-get-screenings-for-movie";
import { auth } from "../../auth/firebase-config";
import { MovieScreening } from "../../types/movie-screening";

const StyledTableCell = styled(TableCell)({
    color: 'white',
    fontWeight: 'bold'
})

function MovieScreeningTable() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { data: screenings } = useGetAllScreeningsForMovie(id as string);

    const reserveTicket = async (screeningId: number) => {
        if (!auth.currentUser) {
            navigate('/signIn')
            return
        }
        navigate(`/bookTicket/${screeningId}`)
    }

    return (
        <Box sx={{ marginTop: '80px' }}>
            <Typography variant="h4" sx={{ color: 'white' }}>Schedule</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" style={{ backgroundColor: 'black' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Cinema Hall</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {screenings?.map((screening: MovieScreening) => {
                            const date = screening.dateAndTimeOfScreening
                            const pastReservation = Moment(date).format('YYYY-MM-DD').toString() < (new Date().toISOString().split('T')[0])

                            if(!pastReservation){
                            return (
                                <TableRow
                                    key={screening.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell align="right">{screening.cinemaHallId}</StyledTableCell>
                                    <StyledTableCell align="right">{Moment(date).format('DD MMMM YYYY')}</StyledTableCell>
                                    <StyledTableCell align="right">{Moment(date).format('hh:mm a')}</StyledTableCell>
                                    <StyledTableCell align="right">${screening.price}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button variant="outlined" 
                                            sx={{
                                                color: 'red',
                                                border: '1px solid red',
                                                '&.MuiButtonBase-root: hover': {
                                                    border: '1px solid red'
                                                }
                                            }} onClick={() => reserveTicket(screening.id)}>Book Ticket</Button>
                                    </StyledTableCell>
                                </TableRow>
                            )}
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MovieScreeningTable;