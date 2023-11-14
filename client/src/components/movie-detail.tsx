import { useParams } from "react-router-dom";
import useGetMovieByMovieId from "../hooks/use-get-movie";
import { Button, Card, CardContent, CardMedia, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import CommentInput from "../types/comment-input";
import Moment from 'moment';
import CommentsList from "./comments-for-movie";
import useAddCommentForMovie from "../hooks/use-add-comment-for-movie";
import useGetAllScreeningsForMovie from "../hooks/use-get-screenings-for-movie";
import useReserveTicket from "../hooks/use-reserve-ticket";

function MovieDetail() {

    const { id } = useParams()
    const { data: movie } = useGetMovieByMovieId(id as string)
    const { mutateAsync: addCommentForMovie } = useAddCommentForMovie(id as string);
    const { mutateAsync: reserveTicketForMovie } = useReserveTicket(id as string);

    const { register, handleSubmit } = useForm<CommentInput>();

    const leftCommentForMovie = async (input: CommentInput) => {
        const comment = input.comment
        addCommentForMovie(comment)
    }

    const { data: screenings } = useGetAllScreeningsForMovie(id as string);
    console.log(screenings)

    const reserveTicket = async (screeningId: number) => {
        reserveTicketForMovie(screeningId);
    }
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '5px' }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={movie?.image}
                    title={movie?.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie?.name}
                        {movie?.rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie?.description}
                    </Typography>
                </CardContent>
            </Card>

            <form onSubmit={handleSubmit(leftCommentForMovie)}>
                <label>Left comment</label>
                <input type="text" placeholder="Your coment here..." {...register("comment")} />
                <button type="submit" value="submit">Submit</button>
            </form>
            <CommentsList />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Cinema Hall</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {screenings?.map((screening: any) => {
                            const date = screening.dateAndTimeOfScreening
                            return (
                                <TableRow
                                    key={screening.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{screening.cinemaHallId}</TableCell>
                                    <TableCell align="right">{Moment(date).format('d MMMM YYYY')}</TableCell>
                                    <TableCell align="right">{Moment(date).format('hh:mm a')}</TableCell>
                                    <TableCell align="right">{screening.price}</TableCell>
                                    <TableCell align="right"><Button onClick={() => reserveTicket(screening.id)}>Reserve Ticket</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MovieDetail;