import express from "express";
import MovieScreeningsController from "../controllers/movie-screenings-controller";

const router = express.Router()

router.get('/', MovieScreeningsController.getAllScreenings)
router.get('/:screeningId', MovieScreeningsController.getScreeningById)
router.get('/movie/:movieId', MovieScreeningsController.getAllScreeningsForMovie)


export default router;