import { Box, Button } from "@mui/material";
import useGetAllCommentsForMovie from "../hooks/use-get-comments-for-movie";
import { auth } from "../auth/firebase-config";
import { useForm } from "react-hook-form";
import CommentInput from "../types/comment-input";
import useEditCommentForMovie from "../hooks/use-edit-comment-for-movie";
import useDeleteComment from "../hooks/use-delete-comment";
import Comment from "../types/comment";
import { useParams } from "react-router-dom";


function CommentsList() {

    const { id } = useParams()

    const { data: commentsForMovie } = useGetAllCommentsForMovie(id as string)
    const { register, handleSubmit } = useForm<CommentInput>();
    const { mutate: editCommentForMovie } = useEditCommentForMovie(id as string);
    const { mutate: deleteCommentForMovie } = useDeleteComment(id as string)

    const editComment = (commentId: number, formValues: CommentInput) => {
        const comment = formValues.comment;
        editCommentForMovie({ commentId, comment });
    };

    const deleteComment = (commentId: number) => {
        deleteCommentForMovie(commentId)
    }


    return (
        <Box>
            <h2>Comments: </h2>
            <ul>
                {commentsForMovie?.map((comment: Comment) => (
                    <span key={comment.id}>
                        <li>{comment.content}</li>
                        <span>{comment.createdAt}</span>
                        {(comment.userId === auth.currentUser?.uid) && <Button onClick={() => deleteComment(comment.id)}>Delete your comment</Button>}
                        {(comment.userId === auth.currentUser?.uid) &&
                            <Box>
                                <h4>Edit your comment</h4>
                                <form onSubmit={handleSubmit((data) => editComment(comment.id, data))} >
                                    <input placeholder={comment.content} {...register("comment")} />
                                    <button type="submit" value="submit">Edit comment</button>
                                </form>
                            </Box>
                        }
                    </span>
                ))}
            </ul>
        </Box>
    )
}

export default CommentsList;