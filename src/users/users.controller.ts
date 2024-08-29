import { Body, Controller, Delete, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    
    usersServices : UsersService;

    constructor(users: UsersService){
        
        this.usersServices = users;
    }

    //obtiene un id por medio del parametro en la url
    @Get('/:id')
    getUser(@Param('id') id: string){
        console.log("id Entrante", id);
        return this.usersServices.getUser(id);
    }

    //obtener los parametros por medio de un query
    @Get('')
    getUserDetalle(@Query() query:{name: string, age:string}){
        console.log("bienvenido" + query.name + " su edad es " + query.age )

        return `Hola ${query.name}, bienvenido, su edad es ${query.age}`;
    }


    @Get('/')
    getAllUsers(){
        return this.usersServices.getAllUsers();
    }

    //para recibir parametros desde el servicio
    //UsePipes tiene como funcion la validación de 
    //los parametros por medio del CreateUserDto
    //obtiene el modelo por medio del body
    @Post('')
    @UsePipes(new ValidationPipe)
    createUser(@Body() usuario: CreateUserDto){
        
        return this.usersServices.createUser(usuario);   
    }

    
    @Put('')
    updateUser(){
        return this.usersServices.updateUser();
    }

    
    @Delete('')
    deteleUser(){
        return this.usersServices.deleteUser();
    }

    @Patch('')
    patchUser(){
        return this.usersServices.patchUser();
    }

    //Manejo de Codigo de Errores por medio de HTTP Code
    @Get('error')
    @HttpCode(404)
    errorPage(){
        return 'Page Not Found'

    }

    //Manejo de Pipes para la conversion de tipos
    //numerico
    @Get('correlativo/:num')
    getCorrelativo(@Param('num', ParseIntPipe)num: number){
        console.log("Dato obtenido", typeof num);
        return num + 2;
    }
    //booleano
    @Get('estado/:estado')
    getEstado(@Param('estado', ParseBoolPipe)estado: boolean){
        console.log("Dato obtenido", typeof estado);
        return estado;
    }


}
