-- CreateTable
CREATE TABLE "Seat" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeatInMovieScreening" (
    "id" SERIAL NOT NULL,
    "seatId" INTEGER NOT NULL,
    "movieScreeningId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SeatInMovieScreening_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SeatInMovieScreening" ADD CONSTRAINT "SeatInMovieScreening_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatInMovieScreening" ADD CONSTRAINT "SeatInMovieScreening_movieScreeningId_fkey" FOREIGN KEY ("movieScreeningId") REFERENCES "MovieScreening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
