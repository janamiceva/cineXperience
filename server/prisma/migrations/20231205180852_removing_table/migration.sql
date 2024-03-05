/*
  Warnings:

  - You are about to drop the `Seat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SeatInMovieScreening` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SeatInMovieScreening" DROP CONSTRAINT "SeatInMovieScreening_movieScreeningId_fkey";

-- DropForeignKey
ALTER TABLE "SeatInMovieScreening" DROP CONSTRAINT "SeatInMovieScreening_seatId_fkey";

-- DropTable
DROP TABLE "Seat";

-- DropTable
DROP TABLE "SeatInMovieScreening";
