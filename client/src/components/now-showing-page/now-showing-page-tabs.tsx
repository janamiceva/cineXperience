import Movie from "../../types/movie";
import MovieCard from "./movie-card";
import useGetMovieByGenre from "../../hooks/use-get-movie-by-genre";
import AllMoviesContent from "./all-movies-content";
import { Box, Typography } from "@mui/material";

function getNowShowingPageTabs() {

    const { data: romanceMovies } = useGetMovieByGenre('Romance');
    const { data: dramaMovies } = useGetMovieByGenre('Drama');
    const { data: comedyMovies } = useGetMovieByGenre('Comedy');
    const { data: actionMovies } = useGetMovieByGenre('Action');
    const { data: adventureMovies } = useGetMovieByGenre('Adventure');
    const { data: animationMovies } = useGetMovieByGenre('Animation');
    const { data: crimeMovies } = useGetMovieByGenre('Crime');


    const NowShowingPageTabs = [
        {
            label: 'All',
            value: '1',
            content:  <AllMoviesContent />
        },
        {
            label: 'Romance',
            value: '2',
            content: romanceMovies?.length ? romanceMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            )) : <Typography variant="h4" sx={{color: 'white', marginTop: '50px'}}>No movies found with this genre</Typography> 
        },
        {
            label: 'Drama',
            value: '3',
            content: dramaMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id}/>
            ))
        },
        {
            label: 'Comedy',
            value: '4',
            content: comedyMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        },
        {
            label: 'Action',
            value: '5',
            content: actionMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        },
        {
            label: 'Adventure',
            value: '6',
            content: adventureMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        },
        {
            label: 'Animation',
            value: '7',
            content: animationMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        },
        {
            label: 'Crime',
            value: '8',
            content: crimeMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        }
    ]

    return NowShowingPageTabs
}

export default getNowShowingPageTabs