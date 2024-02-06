import { ListItem, IconButton, TextField, Tooltip, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import CommentInput from "../../../types/comment-input";
import useAddCommentForMovie from "../../../hooks/use-add-comment-for-movie";
import { useParams } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const StyleTextFied = styled(TextField)({
    borderBottom: '1px solid white',
    '& .MuiInputBase-root': {
        color: 'white'
    }
})
type AddCommentFormProps = {
    setIsAddingComment: React.Dispatch<React.SetStateAction<boolean>>
}

function AddCommentForm({ setIsAddingComment }: AddCommentFormProps) {
    const { id } = useParams();

    const { register, handleSubmit } = useForm<CommentInput>();
    const { mutateAsync: addCommentForMovie } = useAddCommentForMovie(id as string);


    const leftCommentForMovie = async (input: CommentInput) => {
        const comment = input.comment
        addCommentForMovie(comment)
        setIsAddingComment(false);
    }

    return (
        <ListItem sx={{ justifyContent: 'space-around' }}>
            <form onSubmit={handleSubmit(leftCommentForMovie)}>
                <IconButton onClick={() => setIsAddingComment(false)}>
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
                <StyleTextFied id="standard-basic" variant="standard" {...register("comment", {
                    required: {
                        value: true,
                        message: 'Your comment is required'
                    },
                    minLength: 1
                })} />
                <Tooltip title="Save your comment">
                    <IconButton type="submit" value="submit">
                        <DoneIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Tooltip>
            </form>
        </ListItem>
    )
}

export default AddCommentForm;