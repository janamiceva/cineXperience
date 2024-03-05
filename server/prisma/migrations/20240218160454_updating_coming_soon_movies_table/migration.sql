/*
  Warnings:

  - Added the required column `rating` to the `CommingSoonMovies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommingSoonMovies" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
