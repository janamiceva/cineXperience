import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import Comment from "../types/comment"

const deleteComment = async (commentId: number) => {
    const deletedComment = await axiosIntance.delete(`/comments/${commentId}`)
    return deletedComment.data
}

const useDeleteComment = (movieId: string) => {
    const client = useQueryClient();

    return useMutation(deleteComment, {
        onSuccess: (deletedComment) => {
            const comments: Comment[] | undefined = client.getQueryData(['movieComments', movieId])
            if (comments) {
                const commentsForMovie = comments.filter((comment: Comment) => {
                    if (deletedComment.id !== comment.id)
                        return comment
                })
                client.setQueryData(['movieComments', movieId], commentsForMovie)
            }
        }
    })
}

export default useDeleteComment