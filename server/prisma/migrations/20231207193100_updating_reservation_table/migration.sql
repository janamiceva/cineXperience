-- AlterTable
ALTER TABLE "SeatInMovieScreening" ADD COLUMN     "reservationId" INTEGER;

-- AddForeignKey
ALTER TABLE "SeatInMovieScreening" ADD CONSTRAINT "SeatInMovieScreening_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
