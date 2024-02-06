import express from 'express'
import cors from 'cors'
import MoviesRouter from './routes/movie-route'
import UsersRouter from './routes/user-route'
import CommentsRouter from './routes/comment-route'
import HallsRouter from './routes/hall-route'
import MovieScreeningsRouter from './routes/movie-screening-route'
import ReservationRouter from './routes/reservation-route'
import SeatRouter from './routes/seat-route'
import SeatInMovieScreeningRouter from './routes/seat-in-movie-screening-route'
import PaymentRouter from './routes/payment-route'


const app = express()
app.use(express.json())

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/movies', MoviesRouter);
app.use('/users', UsersRouter);
app.use('/comments', CommentsRouter);
app.use('/halls', HallsRouter);
app.use('/movieScreenings', MovieScreeningsRouter);
app.use('/reservations', ReservationRouter)
app.use('/seats', SeatRouter)
app.use('/payment', PaymentRouter)
app.use('/seatsInMovieScreening', SeatInMovieScreeningRouter)


app.listen(3001, () => { console.log('server started ....') })
