interface Movie {
    id: number;
    name: string;
    description: string;
    rating: number;
    director: string;
    cast: string[];
    duration: number;
    genre: string[];
    image: string;
  };
  
  export default Movie;