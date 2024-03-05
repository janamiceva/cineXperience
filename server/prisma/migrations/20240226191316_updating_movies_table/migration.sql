/*
  Warnings:

  - Made the column `description` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `director` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Movie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "director" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL;
