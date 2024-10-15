import { IsString, IsNumber, MinLength, MaxLength, IsEmail, isNumber } from "class-validator";


export class UpdateUserDto {
    @IsNumber()
    Id : number;
    
    Nombres : string;

    Apellidos : string;
    
    Direccion : string;

    Edad : number;
    
}