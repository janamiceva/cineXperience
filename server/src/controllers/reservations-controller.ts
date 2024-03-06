import { type Request, type Response } from 'express'
import ReservationsRepository from '../repositories/reservations-repository';
import nodemailer from 'nodemailer';
import UserRepository from '../repositories/users-repository';
import MovieRepository from '../repositories/movies-repository';
import MovieScreeningsRepository from '../repositories/movie-screenings-repository';
import fs from 'fs';
import pdf from 'html-pdf';
import ejs from 'ejs'
import path from 'path';

const user = process.env.NODEMAILER_USER;
const pass = process.env.NODEMAILER_PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: user as string,
        pass: pass as string,
    },
});

class ReservationsController {
    public static async getAllReservations(_request: Request, response: Response): Promise<void> {
        try {
            const reservations = await ReservationsRepository.getAllReservations();
            response.status(200).json(reservations)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
    public static async createReservation(request: Request, response: Response): Promise<void> {
        try {
            const userId = request.body.userId;
            const user = await UserRepository.getUserByUserId(userId);
            const movieScreeningId = request.params.movieScreeningId;
            const seats = request.body.seats;
            const statusOfReservation = request.body.statusOfReservation;
            const reservation = await ReservationsRepository.createReservation(userId, Number.parseInt(movieScreeningId), statusOfReservation, seats);
            const movieScreening = await MovieScreeningsRepository.getScreeningById(Number(movieScreeningId))
            const movie = await MovieRepository.getMovieByMovieId(movieScreening?.movieId)
            try {

                const templatePath = path.join(__dirname, '../reservation-template.ejs');
                const templateContent = fs.readFileSync(templatePath, 'utf-8');

                const movieReservationDetails = {
                    movieTitle: movie.name,
                    reservationDate: movieScreening.dateAndTimeOfScreening,
                    seats: reservation.seatsId,
                };

                const renderedHTML = ejs.render(templateContent, movieReservationDetails);


                pdf.create(renderedHTML).toFile('movie_reservation_confirmation.pdf', (err, res) => {
                    transporter.sendMail({
                        from: 'cineXperience2024@gmail.com',
                        to: user.email,
                        subject: 'Ticket Reservation Confirmation',
                        html: `
                    <html>
                        <body>
                            <h2>Thank you</h2>
                            <p>for reserving a ticket for movie <b>${movie.name}</b>.</p>
                            <p><b>Date:</b> ${movieScreening.dateAndTimeOfScreening}</p>
                            <p><b>Cinema Hall:</b> ${movieScreening?.cinemaHallId}</p>
                        </body>
                    </html>
                `,
                        attachments: [
                            {
                                filename: 'reservation.pdf',
                                path: res.filename
                            }
                        ]
                    });
                });
                console.log('Email sent');
            } catch (e) {
                console.log('Error sending email:', e);
            }
            response.status(200).json(reservation)

        } catch (error) {
            response.status(500).json({ error: 'An error occurred' });
        }
    }

    public static async getAllReservationsForUser(request: Request, response: Response): Promise<void> {
        try {
            const userId = request.params.userId
            const reservations = await ReservationsRepository.getAllReservationsForUser(userId);
            response.status(200).json(reservations)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async deleteReservation(request: Request, response: Response): Promise<void> {
        try {
            const reservationId = request.params.reservationId
            const paramSeats = request.params.seats
            const movieScreeningId = request.params.movieScreeningId
            const seats = paramSeats.split(',').map((seat: string) => Number.parseInt(seat))
            const deletedReservation = await ReservationsRepository.deleteReservation(Number.parseInt(reservationId), seats, Number.parseInt(movieScreeningId));
            response.status(200).json(deletedReservation)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }
}

export default ReservationsController;