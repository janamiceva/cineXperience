/*
  Warnings:

  - A unique constraint covering the columns `[seatId,movieScreeningId]` on the table `SeatInMovieScreening` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SeatInMovieScreening_seatId_movieScreeningId_key" ON "SeatInMovieScreening"("seatId", "movieScreeningId");
