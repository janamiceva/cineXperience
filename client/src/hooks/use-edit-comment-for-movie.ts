import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import Comment from "../types/comment";
import FormValues from "../types/form-values-for-add-and-edit-comment";


const editCommentForMovie = async (formValues: FormValues) => {
    const commentId = formValues.commentId;
    const content = formValues.comment;
    const editedComment = await axiosIntance.patch(`/comments/${commentId}`, { content });
    return editedComment.data;
}

const useEditCommentForMovie = (movieId: string) => {
    const client = useQueryClient();

    return useMutation(editCommentForMovie, {
        onSuccess: (editedComment) => {
            const comments: Comment[] | undefined = client.getQueryData(['movieComments', movieId]);
            if (comments) {
                const commentsForMovie = comments.map((comment: Comment) => {
                    if (comment.id === editedComment.id) {
                        return editedComment;
                    }
                    return comment;
                });
                client.setQueryData(['movieComments', movieId], commentsForMovie);
            }
        }
    });
}

export default useEditCommentForMovie;
