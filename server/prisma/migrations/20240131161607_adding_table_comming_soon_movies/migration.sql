-- CreateTable
CREATE TABLE "CommingSoonMovies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "director" TEXT NOT NULL,
    "cast" TEXT[],
    "duration" DOUBLE PRECISION NOT NULL,
    "genre" TEXT[],
    "image" TEXT NOT NULL,
    "videoId" TEXT,

    CONSTRAINT "CommingSoonMovies_pkey" PRIMARY KEY ("id")
);
