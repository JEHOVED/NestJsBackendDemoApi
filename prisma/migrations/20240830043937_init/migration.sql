-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "Nombres" TEXT NOT NULL,
    "Apellidos" TEXT NOT NULL,
    "Direccion" TEXT NOT NULL,
    "Edad" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
