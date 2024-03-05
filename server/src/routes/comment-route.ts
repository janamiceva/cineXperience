import express from "express";
import CommentController from "../controllers/comments-controller";
import isAuthenticatedMiddleware from "../../middlewares/auth-middleware"


const router = express.Router();

router.get('/', isAuthenticatedMiddleware, CommentController.getAllComments);
router.get('/:movieId', CommentController.getAllCommentsByMovie);

router.post('/:movieId', isAuthenticatedMiddleware,  CommentController.createComment);

router.patch('/:commentId', isAuthenticatedMiddleware, CommentController.editCommentForMovie)

router.delete('/:commentId', isAuthenticatedMiddleware, CommentController.deleteComment)

export default router