import { IsString, IsNumber, MinLength, MaxLength, IsEmail } from "class-validator";



export class CreateUserDto {
    
    Id ?: number;
    
    @MinLength(3)
    @MaxLength(50)
    @IsString()
    Nombres: string;

    @MinLength(3)
    @MaxLength(50)
    @IsString()
    Apellidos: string;
    
    @IsString()
    Direccion: string;

    @IsNumber()
    Edad: number;
    
    @IsEmail()
    Correo : string;
}