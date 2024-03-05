-- CreateTable
CREATE TABLE "FavoriteMovies" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FavoriteMovies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteMovies" ADD CONSTRAINT "FavoriteMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteMovies" ADD CONSTRAINT "FavoriteMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
