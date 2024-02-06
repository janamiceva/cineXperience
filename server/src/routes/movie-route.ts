import express from "express"
import MoviesController from "../controllers/movies-controller"
import isAuthenticatedMiddleware from "../../middlewares/auth-middleware"

const router = express.Router()

router.get('/', MoviesController.getAllMovies)
router.get('/comingSoon', MoviesController.getAllComingSoonMovies)
router.get('/:id', MoviesController.getMovieByMovieId)
router.get('/genre/:genre', MoviesController.getMovieByGenre)
router.get('/search/:query', MoviesController.getMoviesByQueryString)
router.get('/savedMoviesForUser/:userId', isAuthenticatedMiddleware,  MoviesController.getSavedMoviesForUser)


router.post('/', isAuthenticatedMiddleware, MoviesController.addMovie)
router.post('/save/:movieId/:userId', isAuthenticatedMiddleware, MoviesController.saveMovieForUser)

router.patch('/edit/:movieId', isAuthenticatedMiddleware, MoviesController.editMovie)

router.delete('/delete/:movieId', isAuthenticatedMiddleware, MoviesController.deleteMovie)
router.delete('/deleteSavedMovieForUser/:movieId/:userId',isAuthenticatedMiddleware, MoviesController.deleteSavedMovieForUser)


export default router
