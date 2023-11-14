import express from "express";
import CommentController from "../controllers/comments-controller";

const router = express.Router();

router.post('/:movieId', CommentController.createComment);
router.get('/', CommentController.getAllComments);
router.get('/:movieId', CommentController.getAllCommentsByMovie);
router.patch('/:commentId', CommentController.editCommentForMovie)
router.delete('/:commentId', CommentController.deleteComment)

export default router