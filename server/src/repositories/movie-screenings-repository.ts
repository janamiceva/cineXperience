import { prisma } from "../database";
import Hall from "../types/hall";
import MovieScreening from "../types/movieScreening";

class MovieScreeningsRepository {

    public static async getAllScreenings(): Promise<MovieScreening[]> {
        const movieScreenings = await prisma.movieScreening.findMany()
        return movieScreenings
    } 

    public static async getAllScreeningsForMovie(movieId: number): Promise<MovieScreening[]> {
        const movieScreenings = await prisma.movieScreening.findMany({
            where: {
                movieId
            }
        })

        return movieScreenings
    }

    public static async getScreeningById(screeningId: number): Promise<MovieScreening> {
        const movieScreening = await prisma.movieScreening.findUnique({
            where: {
                id: screeningId
            }
        })
        return movieScreening as MovieScreening
    } 

}

export default MovieScreeningsRepository;