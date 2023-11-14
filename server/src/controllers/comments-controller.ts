import { type Request, type Response } from 'express'
import CommentRepository from '../repositories/comments-repository';

class CommentController {
    public static async createComment(request: Request, response: Response): Promise<void> {
        try {
            const movieId = request.params.movieId;
            const userId = request.body.userId;
            const comment = request.body.comment;
            const newComment = await CommentRepository.createComment(Number.parseInt(movieId), userId, comment)
            response.status(200).json(newComment)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getAllComments(request: Request, response: Response): Promise<void> {
        try {
            const comments = await CommentRepository.getAllComments()
            response.status(200).json(comments)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async getAllCommentsByMovie(request: Request, response: Response): Promise<void> {
        try {
            const movieId = request.params.movieId;
            const comments = await CommentRepository.getAllCommentsByMovie(Number.parseInt(movieId))
            response.status(200).json(comments)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async editCommentForMovie(request: Request, response: Response): Promise<void> {
        try{
            const commentId = request.params.commentId;
            const content = request.body.content;
            const editedComment = await CommentRepository.editCommentForMovie(Number.parseInt(commentId), content)
            response.status(200).json(editedComment)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }

    public static async deleteComment(request: Request, response: Response): Promise<void> {
        try {
            const commentId = request.params.commentId;
            const deletedComment= await CommentRepository.deleteComment(Number.parseInt(commentId))
            response.status(200).json(deletedComment)
        } catch (error) {
            response.status(500).json({ error: 'An error occurred' })
        }
    }


}

export default CommentController