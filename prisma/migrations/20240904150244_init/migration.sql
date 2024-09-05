-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Nombres" TEXT NOT NULL,
    "Apellidos" TEXT NOT NULL,
    "Direccion" TEXT NOT NULL,
    "Edad" INTEGER NOT NULL,
    "Correo" TEXT NOT NULL,
    "FechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "FechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
