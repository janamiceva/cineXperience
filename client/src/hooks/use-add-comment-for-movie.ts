import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import { useUserStore } from "../store/user-store";
import Comment from "../types/comment";

const addCommentForMovie = async (comment: string, movieId: string, userId: string | undefined) => {
    const newComment = await axiosIntance.post(`/comments/${movieId}`, { userId, comment });
    return newComment.data;
}

const useAddCommentForMovie = (movieId: string) => {
    const client = useQueryClient();
    const userId = useUserStore().user?.uid;

    return useMutation((comment: string) => addCommentForMovie(comment, movieId, userId), {
        onSuccess: (data) => {
            const comments: Comment[] | undefined = client.getQueryData(['movieComments', movieId]);
            if (comments) {
                const commentsForMovie = [...comments, data]
                client.setQueryData(['movieComments', movieId], commentsForMovie);
            }

        }
    });
}

export default useAddCommentForMovie;
