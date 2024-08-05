-- CreateTable
CREATE TABLE "phrases" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "phrases_pkey" PRIMARY KEY ("id")
);
