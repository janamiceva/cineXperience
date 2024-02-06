import useGetMovies from "../../hooks/use-get-movies";
import Movie from "../../types/movie";
import useGetComingSoonMovies from "../../hooks/use-get-comming-soon-movies";
import HomePageMovieCard from "./home-page-movie-card";

function useHomePageTabs() {

    const { data: nowShowing } = useGetMovies();
    const { data: comingSoon } = useGetComingSoonMovies();

    const HomePageTabs = [
        {
            label: 'Now showing',
            value: '1',
            content: nowShowing?.map((movie: Movie) => (
                <HomePageMovieCard key={movie.id} movie={movie} />
            ))
        },
        {
            label: 'Coming soon',
            value: '2',
            content: comingSoon?.map((movie: Movie) => (
                <HomePageMovieCard key={movie.id} movie={movie} />
            ))
        }
    ]

    return { HomePageTabs }
}

export default useHomePageTabs