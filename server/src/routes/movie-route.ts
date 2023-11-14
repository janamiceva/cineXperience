import express from "express"
import MoviesController from "../controllers/movies-controller"
import isAuthenticatedMiddleware from "../../middlewares/auth-middleware"

const router = express.Router()

router.get('/', isAuthenticatedMiddleware, MoviesController.getAllMovies)
router.get('/:id', MoviesController.getMovieByMovieId)
router.delete('/delete', MoviesController.deleteAllMovies)


export default router
