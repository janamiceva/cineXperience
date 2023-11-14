import { prisma } from "../database";
import Comment from "../types/comment";

class CommentRepository {

    public static async createComment(movieId: number, userId: string, comment: string): Promise<Comment> {
    
        const newComment = await prisma.comment.create({
            data: {
                userId,
                movieId,
                content: comment
            }
        })
        return newComment
    }

    public static async getAllComments(): Promise<Comment[]> {
        const comments = await prisma.comment.findMany()
        return comments
    } 

    public static async getAllCommentsByMovie(movieId: number): Promise<Comment[]> {
        const comments = await prisma.comment.findMany({
            where: {
                movieId
            }
        })
        return comments
    } 

    public static async editCommentForMovie(commentId: number, content: string): Promise<Comment> {
        const editedComment = await prisma.comment.update({
            where: {
                id: commentId
            }, 
            data: {
                content
            }
        })

        return editedComment
    }

    public static async deleteComment (commentId: number): Promise<Comment> {
        const deletedComment = await prisma.comment.delete({
            where: {
                id: commentId
            }
        })
        return deletedComment
    }

}

export default CommentRepository;