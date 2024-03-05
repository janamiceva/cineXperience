/*
  Warnings:

  - A unique constraint covering the columns `[movieId,userId]` on the table `FavoriteMovies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FavoriteMovies_movieId_userId_key" ON "FavoriteMovies"("movieId", "userId");
