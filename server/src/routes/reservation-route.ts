import express from "express";
import ReservationsController from "../controllers/reservations-controller";
import isAuthenticatedMiddleware from "../../middlewares/auth-middleware";
import UserRole from "../types/user-role";
import hasRohasRoleMiddlewarele from "../../middlewares/role-middleware";

const router = express.Router()

router.get('/', isAuthenticatedMiddleware, hasRohasRoleMiddlewarele(UserRole.admin), ReservationsController.getAllReservations)
router.get('/:userId', isAuthenticatedMiddleware, ReservationsController.getAllReservationsForUser)

router.post('/create/:movieScreeningId', isAuthenticatedMiddleware, ReservationsController.createReservation)

router.delete('/delete/:reservationId/:movieScreeningId/:seats', isAuthenticatedMiddleware, ReservationsController.deleteReservation)

export default router;