import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from "@mui/icons-material/Delete";
import useDeleteMovie from "../../hooks/use-delete-movie";
import EditIcon from "@mui/icons-material/Edit";
import useEditMovie from "../../hooks/use-edit-movie";
import ModalForm from "../modal";
import { useForm } from "react-hook-form";
import { MovieInput } from "../../types/movie-input";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { auth } from "../../auth/firebase-config";
import useGetUserById from "../../hooks/use-get-user";
import UserRole from "../../types/enum/user-role";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useAddMovieForUser from "../../hooks/use-add-movie-for-user";
import useGetSavedMoviesForUser from "../../hooks/use-get-saved-movies-for-user";
import useDeleteSavedMovieForUser from "../../hooks/use-delete-saved-movie-for-user";
import SavedMovieForUser from "../../types/saved-movie-for-user";
import { useSnackbar } from "notistack";
import useGetMovieByMovieId from "../../hooks/use-get-movie";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  width: 300,
  backgroundColor: "black",
  cursor: "pointer",
  padding: 10,
  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
    width: 400,
    padding: theme.spacing(0),
  }
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFormLabel-root.Mui-focused": {
    color: "black",
  },
  "& .MuiInputBase-root: after": {
    borderBottom: "none",
  },
  "& .MuiInputBase-root: hover": {
    borderBottom: "none",
  },
  "& .MuiInputBase-root-MuiInput-root: hover": {
    borderBottom: "none",
  },
}));

type CardProps = {
  movieId: number;
};

function MovieCard({ movieId }: CardProps) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [isEditingMovie, setIsEditingMovie] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { data: movie } = useGetMovieByMovieId(String(movieId))
  const { mutate: deleteNowShowingMovie } = useDeleteMovie();
  const { mutate: editNowShowingMovie } = useEditMovie();
  const { mutate: saveMovie } = useAddMovieForUser(String(movie?.id));
  const { mutate: deleteSavedMovie } = useDeleteSavedMovieForUser(
    String(movie?.id)
  );
  
  useGetSavedMoviesForUser({
    onSuccess: (data: SavedMovieForUser[]) => {
      data?.map((savedMovie: SavedMovieForUser) => {
        if (movie?.id === savedMovie.movieId) {
          setFavorite(true);
        }
      });
    },
  });

  const callbackDeleteMovie = () => {
    deleteSavedMovie();
    setFavorite(false);
    enqueueSnackbar({ message: `${movie?.name} is unsaved from your list`, variant: 'success' })
  };

  const { register, handleSubmit } = useForm<MovieInput>();
  const userRole = useGetUserById(auth.currentUser?.uid as string)?.data?.user?.role;

  const handleEditMovie = (inputValues: MovieInput) => {
    const movieId = movie?.id;
    const values = { ...inputValues, movieId };
    editNowShowingMovie(values);
    setIsEditingMovie(false);
  };

  const handleSaveMovie = () => {
    saveMovie()
    enqueueSnackbar({ message: `${movie?.name} is saved in your list`, variant: 'success' })
  }

  const hasGenre = (genre: string) => {
    return movie?.genre.includes(genre);
  };

  return (
    <StyledCard>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 250 }}
          image={movie?.image}
          title={movie?.name}
          onClick={() => navigate(`/movies/${movie?.id}`)}
        />
        {!favorite && auth.currentUser ? (
          <Tooltip title="Save movie">
            <IconButton
              onClick={handleSaveMovie}
              sx={{ position: "absolute", bottom: -5, right: 0 }}
            >
              <BookmarkBorderIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        ) : auth.currentUser ? (
          <Tooltip title="Unsave movie">
            <IconButton
              onClick={() => callbackDeleteMovie()}
              sx={{ position: "absolute", bottom: -5, right: 0 }}
            >
              <BookmarkIcon sx={{ color: "yellow" }} />
            </IconButton>
          </Tooltip>
        ) : null}
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          sx={{ color: "white", display: "inline" }}
        >
          {movie?.name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "white", display: 'inline' }}>Rating: {movie?.rating} / 10</Typography>
          <StarIcon sx={{ fill: 'yellow' }} />
        </Box>
        {userRole === UserRole.admin && (
          <Box>
            <Tooltip title="Delete movie">
              <IconButton
                sx={{ padding: 0 }}
                onClick={() => deleteNowShowingMovie(movie?.id)}
              >
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit movie">
              <IconButton onClick={() => setIsEditingMovie(true)}>
                <EditIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </CardContent>
      <ModalForm open={isEditingMovie} handleClose={setIsEditingMovie}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
          Edit a movie
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 10,
          }}
          onSubmit={handleSubmit(handleEditMovie)}
        >
          <StyledTextField
            label="Name"
            placeholder={movie?.name}
            variant="standard"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Description"
            placeholder={movie?.description}
            variant="standard"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Director"
            placeholder={movie?.director}
            variant="standard"
            {...register("director", {
              required: {
                value: true,
                message: "Director is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Duration"
            placeholder={movie?.duration.toString()}
            variant="standard"
            {...register("duration", {
              required: {
                value: true,
                message: "Duration is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Rating"
            placeholder={movie?.rating.toString()}
            variant="standard"
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Image"
            placeholder={movie?.image}
            variant="standard"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="VideoId"
            placeholder={movie?.videoId}
            variant="standard"
            {...register("videoId", {
              required: {
                value: true,
                message: "VideoId is required",
              },
              minLength: 1,
            })}
          />
          <StyledTextField
            label="Cast"
            placeholder={movie?.cast.join()}
            variant="standard"
            {...register("cast", {
              required: {
                value: true,
                message: "Cast is required",
              },
              minLength: 1,
            })}
          />
          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              key="Romance"
              control={
                <Checkbox
                  value="Romance"
                  defaultChecked={hasGenre("Romance")}
                  color="error"
                />
              }
              label="Romance"
              {...register("genre")}
            />
            <FormControlLabel
              key="Drama"
              control={
                <Checkbox
                  value="Drama"
                  defaultChecked={hasGenre("Drama")}
                  color="error"
                />
              }
              label="Drama"
              {...register("genre")}
            />
            <FormControlLabel
              key="Action"
              control={
                <Checkbox
                  value="Action"
                  defaultChecked={hasGenre("Action")}
                  color="error"
                />
              }
              label="Action"
              {...register("genre")}
            />
            <FormControlLabel
              key="Crime"
              control={
                <Checkbox
                  value="Crime"
                  defaultChecked={hasGenre("Crime")}
                  color="error"
                />
              }
              label="Crime"
              {...register("genre")}
            />
            <FormControlLabel
              key="Adventure"
              control={
                <Checkbox
                  value="Adventure"
                  defaultChecked={hasGenre("Adventure")}
                  color="error"
                />
              }
              label="Adventure"
              {...register("genre")}
            />
            <FormControlLabel
              key="Science Fiction"
              control={
                <Checkbox
                  value="Science Fiction"
                  defaultChecked={hasGenre("Science Fiction")}
                  color="error"
                />
              }
              label="Science Fiction"
              {...register("genre")}
            />
            <FormControlLabel
              key="Comedy"
              control={
                <Checkbox
                  value="Comedy"
                  defaultChecked={hasGenre("Comedy")}
                  color="error"
                />
              }
              label="Comedy"
              {...register("genre")}
            />
            <FormControlLabel
              key="Thriler"
              control={
                <Checkbox
                  value="Thriller"
                  defaultChecked={hasGenre("Thriller")}
                  color="error"
                />
              }
              label="Thriller"
              {...register("genre")}
            />
          </FormGroup>
          <Button
            sx={{
              color: "black",
              border: "1px solid black",
              fontWeight: "bold",
            }}
            type="submit"
            value="submit"
          >
            Edit movie
          </Button>
        </form>
      </ModalForm>
    </StyledCard>
  );
}

export default MovieCard;
