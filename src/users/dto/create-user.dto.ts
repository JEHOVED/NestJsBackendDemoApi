import { IsString, IsNumber, MinLength, MaxLength, IsEmail } from "class-validator";



export class CreateUserDto {
    @IsString()
    id: string;
    
    @MinLength(3)
    @MaxLength(50)
    @IsString()
    nombres: string;

    @MinLength(3)
    @MaxLength(50)
    @IsString()
    apellidos: string;
    
    @IsString()
    direccion: string;

    @IsNumber()
    edad: number;
    
    @IsEmail()
    correo ?: string;
}