import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, FormControl, RadioGroup, Radio, Box, Button, styled, FormControlLabel, FormLabel, TableCell, Typography } from "@mui/material";
import useEditSeatStatus from "../../hooks/use-edit-seat-status";
import useReserveTicket from "../../hooks/use-reserve-ticket";
import ModalForm from "../modal";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCardStore } from "../../store/card-store";
import Card from "../card";


const StyledTableCell = styled(TableCell)({
    color: 'white',
    fontWeight: 'bold'
})

const StyledButton = styled(Button)({
    justifySelf: 'center',
    color: 'red',
    border: '1px solid red',
    '&.MuiButton-root.Mui-disabled ': {
        color: 'grey',
        border: '1px solid grey',
    }
})

const StyledTableContainer = styled(Box)(({ theme }) => ({
    border: '1px solid white',
    width: '400px',
    [theme.breakpoints.down('md')]: {
        marginTop: '50px',
    }
}))


const StyledFormLabel = styled(FormLabel)({
    color: 'white',
    '&.MuiFormLabel-root.Mui-focused': {
        color: 'white'
    }
})
const StyledFormControlLabel = styled(FormControlLabel)({
    color: 'white',
    '& .MuiRadio-root.Mui-checked': {
        color: 'red',
    },
    '& .MuiRadio-colorPrimary': {
        color: 'red',
    }
})

type BookingDetailsTableProps = {
    selectedSeats: number[],
    totalPrice: number,
    movieName: string,
    onReservingAticket: (seats: number[], price: number) => void;
}

function BookingDetailsTable({ selectedSeats, totalPrice, movieName, onReservingAticket }: BookingDetailsTableProps) {
    const { mutateAsync: reserveTicketForMovie, error } = useReserveTicket();
    const [sucessfulModal, setsucessfulModal] = useState(false);
    const [paymentModal, setPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const movieScreeningIdParams = useParams()
    const screeningId = movieScreeningIdParams?.id as string
    const { mutate: editSeatStatus } = useEditSeatStatus(screeningId);
    const cardStore = useCardStore()

    const isPaymentmethodCard = () => {
        cardStore.setTotalPrice(totalPrice)
        if (paymentMethod.match('card')) {
            setPaymentModal(true)
        } else {
            handleReserve();
        }
    }

    const handleReserve = () => {
        selectedSeats.forEach((seatId: number) => {
            const status = true
            editSeatStatus({ screeningId, seatId, status })

        })
        reserveTicketForMovie({ screeningId, selectedSeats, paymentMethod })
        if (paymentMethod.match('card')) {
            setPaymentModal(false)
        }
        onReservingAticket([], 0)
        setsucessfulModal(true)
    }


    const handleChaningPaymentMethod = (event: any) => {
        setPaymentMethod(event.target.value)
    }

    return (
        <>
            <StyledTableContainer>
                <TableContainer component={Paper}>
                    <Table size="small" style={{ backgroundColor: 'black' }}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell sx={{ color: 'red' }} align="center">DETAILS</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <StyledTableCell align="center">Selected seats: 
                                    {selectedSeats.map((seat: number, i: number) => {
                                        if (i !== selectedSeats.length - 1)
                                            return (<span key={i} style={{ color: 'orange' }}>{seat}, </span>)
                                        return (<span key={i} style={{ color: 'orange' }}>{seat} </span>)
                                    })}
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell align="center">Total Price: <span style={{ color: 'red', fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</span></StyledTableCell>
                            </TableRow>
                            <TableRow sx={{ borderBottom: '1px solid white' }}>
                                <FormControl sx={{ display: 'flex', alignItems: 'center' }}>
                                    <StyledFormLabel>Paying method</StyledFormLabel>
                                    <RadioGroup
                                        defaultValue="cash"
                                        name="radio-buttons-group"
                                    >
                                        <StyledFormControlLabel onChange={(e) => handleChaningPaymentMethod(e)} value="cash" control={<Radio />} label="Cash" />
                                        <StyledFormControlLabel onChange={(e) => handleChaningPaymentMethod(e)} value="card" control={<Radio />} label="Card" />
                                    </RadioGroup>
                                </FormControl>
                            </TableRow>
                            <TableRow sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
                                <StyledButton disabled={!selectedSeats.length} onClick={isPaymentmethodCard}>Book now</StyledButton>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledTableContainer>
            <ModalForm sx={{ display: 'flex' }} open={sucessfulModal} handleClose={setsucessfulModal}>
                {error ? (
                    <>
                        <CancelIcon sx={(theme) => ({ color: 'red', paddingRight: theme.spacing(1) })} />
                        <Typography sx={{ display: 'inline' }}>
                            Something went wrong, please try again.
                        </Typography>
                    </>
                ) : (
                    <>
                        <CheckCircleIcon sx={(theme) => ({ color: 'green', paddingRight: theme.spacing(1) })} />
                        <Typography sx={{ display: 'inline' }}>
                            You have successfully booked your tickets for {movieName}.
                        </Typography>
                    </>
                )}
            </ModalForm>
            <ModalForm sx={{ display: 'flex' }} open={paymentModal} handleClose={setPaymentModal}>
                <Card handleReserve={handleReserve} />
            </ModalForm>
        </>

    )
}

export default BookingDetailsTable;
