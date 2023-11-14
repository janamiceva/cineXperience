/*
  Warnings:

  - The `genre` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `image` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "image" TEXT NOT NULL,
DROP COLUMN "genre",
ADD COLUMN     "genre" TEXT[];
