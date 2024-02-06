import express from "express";
import SeatsInMovieScreeningController from "../controllers/seats-in-movie-screening-controller";

const router = express.Router()

router.get('/', SeatsInMovieScreeningController.getAllSeatsInMovieScreenings)
router.get('/:movieScreeningId', SeatsInMovieScreeningController.getAllSeatsForMovieScreening)

router.patch('/edit/:screeningId', SeatsInMovieScreeningController.updateSeatStatus)

export default router;