# NestJsBackendDemoApi
Aplicación demo de NestJS con servicios REST Básicos, con una BDD MySQL
Comando para correr app
npm run start:dev

Comandos para iniciar prisma
npx prisma init
Comando para migracion de datos
npx prisma migrate dev --name init



DATABASE_URL="postgresql://postgres:123456@localhost:5432/NESTJSBACKEND_DB?schema=public"

CREATE DATABASE "NESTJSBACKEND_DB"
    WITH
    OWNER = postgres
    TEMPLATE = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Guatemala.1252'
    LC_CTYPE = 'Spanish_Guatemala.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT ALL ON DATABASE "NESTJSBACKEND_DB" TO postgres WITH GRANT OPTION;