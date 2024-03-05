/*
  Warnings:

  - You are about to drop the column `reservationId` on the `SeatInMovieScreening` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SeatInMovieScreening" DROP CONSTRAINT "SeatInMovieScreening_reservationId_fkey";

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "seatsId" TEXT[];

-- AlterTable
ALTER TABLE "SeatInMovieScreening" DROP COLUMN "reservationId";
