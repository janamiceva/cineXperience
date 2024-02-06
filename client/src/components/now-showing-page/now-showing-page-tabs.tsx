import Movie from "../../types/movie";
import MovieCard from "./movie-card";
import useGetMovieByGenre from "../../hooks/use-get-movie-by-genre";
import AllMoviesContent from "./all-movies-content";

function getNowShowingPageTabs() {

    const { data: romanceMovies } = useGetMovieByGenre('Romance');
    const { data: dramaMovies } = useGetMovieByGenre('Drama');
    const { data: scienceFictionMovies } = useGetMovieByGenre('Science Fiction');
    const { data: actionMovies } = useGetMovieByGenre('Action');
    const { data: adventureMovies } = useGetMovieByGenre('Adventure');
    const { data: thrillerMovies } = useGetMovieByGenre('Thriller');
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
            content: romanceMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id} />
            ))
        },
        {
            label: 'Drama',
            value: '3',
            content: dramaMovies?.map((movie: Movie) => (
                <MovieCard key={movie.id} movieId={movie.id}/>
            ))
        },
        {
            label: 'Sci-Fi',
            value: '4',
            content: scienceFictionMovies?.map((movie: Movie) => (
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
            label: 'Thriller',
            value: '7',
            content: thrillerMovies?.map((movie: Movie) => (
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