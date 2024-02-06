import Movie from "../../../types/movie";

export function getFilteredMovies(array1: Array<Movie>, array2: Array<Movie>) {
    let fileredMovies: Movie[] = []
    array1?.map((movie1) => {
        array2?.map((movie2) => {
            if (movie2.name === movie1.name)
                fileredMovies.push(movie2)
        })
    })
    return fileredMovies;
}