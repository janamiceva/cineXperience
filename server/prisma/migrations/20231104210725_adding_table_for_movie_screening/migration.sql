-- CreateTable
CREATE TABLE "MovieScreening" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "cinemaHallId" INTEGER NOT NULL,
    "dateAndTimeOfScreening" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MovieScreening_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MovieScreening" ADD CONSTRAINT "MovieScreening_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieScreening" ADD CONSTRAINT "MovieScreening_cinemaHallId_fkey" FOREIGN KEY ("cinemaHallId") REFERENCES "CinemaHall"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
