import express from "express"
import MoviesController from "../controllers/movies-controller"
import isAuthenticatedMiddleware from "../../middlewares/auth-middleware"
import hasRohasRoleMiddlewarele from "../../middlewares/role-middleware"
import UserRole from "../types/user-role"

const router = express.Router()

router.get('/', MoviesController.getAllMovies)
router.get('/APIMovies',  hasRohasRoleMiddlewarele(UserRole.admin), MoviesController.APIMovies)
router.get('/pagination', MoviesController.getAllMoviesPagination)
router.get('/comingSoon', MoviesController.getAllComingSoonMovies)
router.get('/:id', MoviesController.getMovieByMovieId)
router.get('/genre/:genre', MoviesController.getMoviesByGenre)
router.get('/search/:query', MoviesController.getMoviesByQueryString)
router.get('/savedMoviesForUser/:userId', isAuthenticatedMiddleware,  MoviesController.getSavedMoviesForUser)


router.post('/', isAuthenticatedMiddleware, hasRohasRoleMiddlewarele(UserRole.admin), MoviesController.addMovie)
router.post('/save/:movieId/:userId', isAuthenticatedMiddleware, MoviesController.saveMovieForUser)

router.patch('/edit/:movieId', isAuthenticatedMiddleware, hasRohasRoleMiddlewarele(UserRole.admin), MoviesController.editMovie)

router.delete('/delete/:movieId', isAuthenticatedMiddleware,  hasRohasRoleMiddlewarele(UserRole.admin), MoviesController.deleteMovie)
router.delete('/deleteSavedMovieForUser/:movieId/:userId',isAuthenticatedMiddleware, MoviesController.deleteSavedMovieForUser)


export default router
