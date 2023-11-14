import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import useGetAllReservationsForUser from "../hooks/use-get-all-reservations-for-user"
import TableRowForReservation from "./table-row-for-my-reservation";


function MyReservations () {

    const {data: myReservations} = useGetAllReservationsForUser()

    return(
        <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Movie</TableCell>
                            <TableCell align="right">Duration</TableCell>
                            <TableCell align="right">Cinema Hall</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status of the reservation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myReservations?.map((reservation: any) => (
                           <TableRowForReservation reservation={reservation}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )

}

export default MyReservations