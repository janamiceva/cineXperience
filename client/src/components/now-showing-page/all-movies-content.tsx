import { Box, InputBase, SelectChangeEvent } from "@mui/material";
import Movie from "../../types/movie";
import DropDown from "./drop-down";
import MovieCard from "./movie-card";
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from "react";
import useGetMoviesByQueryString from "../../hooks/use-get-movies-by-query-string";
import useGetMovieByGenre from "../../hooks/use-get-movie-by-genre";
import { getFilteredMovies } from "./utils/get-filtered-movies";
import Pagination from "../pagination";
import useGetMoviesPagination from "../../hooks/use-get-movies-with-pagination";

function AllMoviesContent() {
    const [searchQuery, setSearchQuery] = useState("")
    const [genre, setGenre] = useState("");
    const [currentPage, setCurrentPage] = useState(1)
    const { data: allMoviesAndCounter } = useGetMoviesPagination(currentPage);
    const { data: filteredMoviesByQuery } = useGetMoviesByQueryString(searchQuery)
    const { data: filteredMoviesByGenre } = useGetMovieByGenre(genre)
    const allMovies = allMoviesAndCounter?.movies
    const totalItems = allMoviesAndCounter?.counter;

    let filteredMovies: Movie[] = []
    if (!genre) {
        filteredMovies = filteredMoviesByQuery
    } else if (!searchQuery) {
        filteredMovies = filteredMoviesByGenre
    } else {
        filteredMovies = getFilteredMovies(filteredMoviesByQuery, filteredMoviesByGenre)
    }
    
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
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
            { (!filteredMovies || filteredMovies?.length > 8) && <Pagination totalItems={totalItems} currentPage={currentPage} paginate={paginate} />}
        </>
    )
}

export default AllMoviesContent;