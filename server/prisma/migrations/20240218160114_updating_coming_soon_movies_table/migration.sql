/*
  Warnings:

  - You are about to drop the column `cast` on the `CommingSoonMovies` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `CommingSoonMovies` table. All the data in the column will be lost.
  - You are about to drop the column `director` on the `CommingSoonMovies` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `CommingSoonMovies` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `CommingSoonMovies` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `CommingSoonMovies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommingSoonMovies" DROP COLUMN "cast",
DROP COLUMN "description",
DROP COLUMN "director",
DROP COLUMN "duration",
DROP COLUMN "genre",
DROP COLUMN "rating";
