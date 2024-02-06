import { Box, InputBase, SelectChangeEvent } from "@mui/material";
import Movie from "../../types/movie";
import DropDown from "./drop-down";
import MovieCard from "./movie-card";
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from "react";
import useGetMovies from "../../hooks/use-get-movies";
import useGetMoviesByQueryString from "../../hooks/use-get-movies-by-query-string";
import useGetMovieByGenre from "../../hooks/use-get-movie-by-genre";
import { getFilteredMovies } from "./utils/get-filtered-movies";

function AllMoviesContent() {
    const [searchQuery, setSearchQuery] = useState("")
    const [genre, setGenre] = useState("");
    const { data: allMovies } = useGetMovies();
    const { data: filteredMoviesByQuery } = useGetMoviesByQueryString(searchQuery)
    const { data: filteredMoviesByGenre } = useGetMovieByGenre(genre)

    let filteredMovies: Movie[] = []
    if (!genre) {
        filteredMovies = filteredMoviesByQuery
    } else if (!searchQuery) {
        filteredMovies = filteredMoviesByGenre
    } else {
        filteredMovies = getFilteredMovies(filteredMoviesByQuery, filteredMoviesByGenre)
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchQuery(e.target.value)
    }

    const handleChangeDropDownOption = (event: SelectChangeEvent) => {
        setGenre(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', margin: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <SearchIcon sx={{ color: 'white' }} />
                    <InputBase sx={{ color: 'white', borderBottom: '1px solid white' }} placeholder="Search" onChange={(e) => handleSearch(e)} />
                </Box>
                <DropDown genre={genre} handleChangeDropDownOption={handleChangeDropDownOption} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%' }}>
                {searchQuery === '' && genre === '' ? (
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {allMovies?.map((movie: Movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} />
                        ))}
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {filteredMovies?.map((movie: Movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} />
                        ))}
                    </Box>
                )}
            </Box>
        </>
    )
}

export default AllMoviesContent;