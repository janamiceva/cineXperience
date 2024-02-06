import { Box, IconButton, List, Typography } from "@mui/material";
import useGetAllCommentsForMovie from "../../../hooks/use-get-comments-for-movie";
import { auth } from "../../../auth/firebase-config";
import Comment from "../../../types/comment";
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CommentListItem from "./comment-list-item";
import AddCommentForm from "./add-comment-form";

function CommentsList() {

    const { id } = useParams();
    const [isAddingComment, setIsAddingComment] = useState(false);
    const { data: commentsForMovie } = useGetAllCommentsForMovie(String(id))

    return (
        <Box sx={() => ({ maxWidth: 360, width: '360px', })}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h4" style={{ color: 'white', paddingBottom: '30px' }}>Comments </Typography>
                {auth.currentUser && (<IconButton onClick={() => setIsAddingComment(true)}><AddIcon sx={{ color: 'white' }} /></IconButton>)}
            </Box>
            <List sx={{ backgroundColor: 'inherit', height: '200px', overflowY: 'auto' }}>
                {isAddingComment && (
                    <AddCommentForm setIsAddingComment={setIsAddingComment} />
                )}
                {commentsForMovie?.map((comment: Comment) => (
                    <CommentListItem key={comment.id} comment={comment} />
                ))}
            </List>
        </Box>
    )
}

export default CommentsList;
