import express from "express";
import ReservationsController from "../controllers/reservations-controller";

const router = express.Router()

router.get('/', ReservationsController.getAllReservations)
router.get('/:userId', ReservationsController.getAllReservationsForUser)
router.post('/:id/:movieScreeningId', ReservationsController.createReservation)

export default router;