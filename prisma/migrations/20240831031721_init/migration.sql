/*
  Warnings:

  - Added the required column `FechaActualizacion` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "FechaActualizacion" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "FechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
