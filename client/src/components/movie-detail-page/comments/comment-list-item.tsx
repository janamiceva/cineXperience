import { ListItem, IconButton, TextField, Tooltip, ListItemAvatar, ListItemText, Avatar, Button, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useDeleteComment from "../../../hooks/use-delete-comment";
import { useParams } from "react-router-dom";
import { auth } from "../../../auth/firebase-config";
import { useState } from "react";
import ModalForm from "../../modal";
import Comment from "../../../types/comment";
import { useForm } from "react-hook-form";
import useEditCommentForMovie from "../../../hooks/use-edit-comment-for-movie";
import CommentInput from "../../../types/comment-input";
import useGetUserById from "../../../hooks/use-get-user";
import UserRole from "../../../types/enum/user-role";

type CommentListItemProps = {
    comment: Comment
}

function CommentListItem({ comment }: CommentListItemProps) {
    const { id } = useParams();
    const { mutate: deleteCommentForMovie } = useDeleteComment(String(id))
    const [isEditingComment, setIsEditingComment] = useState(false);
    const { mutate: editCommentForMovie } = useEditCommentForMovie(String(id));
    const { register, handleSubmit } = useForm<CommentInput>();
    const userRole = useGetUserById(auth.currentUser?.uid as string)?.data?.user?.role;

    const editComment = (commentId: number, formValues: CommentInput) => {
        const comment = formValues.comment;
        editCommentForMovie({ commentId, comment });
        setIsEditingComment(false)
    };

    const deleteComment = (commentId: number) => {
        deleteCommentForMovie(commentId)
    }
   
    return (
        <>
            <ListItem
                disableGutters
                secondaryAction={
                    (comment.userId === auth.currentUser?.uid || userRole === UserRole.admin) && <>
                        <Tooltip title="Edit your comment">
                            <IconButton onClick={() => setIsEditingComment(true)} >
                                <EditIcon sx={{ color: 'white' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete your comment">
                            <IconButton onClick={() => deleteComment(comment.id)} >
                                <DeleteIcon sx={{ color: 'red' }} />
                            </IconButton>
                        </Tooltip>
                    </>
                }
            >
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText primary={comment.content} sx={{ color: 'white' }} />
            </ListItem>
            <ModalForm open={isEditingComment} handleClose={setIsEditingComment}>
                <Typography>Edit your comment</Typography>
                <form style={{ display: 'flex', flexDirection: 'column', paddingTop: '10px' }} onSubmit={handleSubmit((data) => editComment(comment.id, data))} >
                    <TextField sx={{ color: 'white' }} placeholder={comment.content} variant="standard" {...register("comment", {
                        required: {
                            value: true,
                            message: 'Your comment is required'
                        },
                        minLength: 1
                    })} />
                    <Button sx={{ color: 'black' }} type="submit" value="submit">Edit comment</Button>
                </form>
            </ModalForm>
        </>
    )
}

export default CommentListItem;