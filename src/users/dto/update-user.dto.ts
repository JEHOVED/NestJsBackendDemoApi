import { IsString, IsNumber } from "class-validator";


export class UpdateUserDto {
    @IsString()
    id: string;
    
    @IsString()
    nombres: string;
    
    @IsString()
    apellidos: string;
    
    @IsString()
    direccion: string;

    @IsNumber()
    edad: number;
}