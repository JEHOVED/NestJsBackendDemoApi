import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { AnyAaaaRecord } from 'dns';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

            
    
    //se crea el arreglo de tipo usuarios inicializandolo en blanco
    private listadoUsuarios : CreateUserDto[] = [];

    //metodo para obtener un usuario, por medio de parametro id
    getUser(id: string): CreateUserDto {
        
        console.log("usuario entrante con id", id);
        let usuarioEncontrado = this.listadoUsuarios.find(usuario => usuario.id == id);
        console.log("usuario encontrado", usuarioEncontrado);

        if(!usuarioEncontrado){
            throw new NotFoundException("La tarea con ese ID"+ {id} + "no fue encontrada");
        }
        return usuarioEncontrado;
    }

    //se crea un objeto de tipo interfaz, llamado usuarios (un arreglo)
    // y debe de retornar un arreglo de usuarios
    getAllUsers() {
        
        return this.prisma.user.findMany();
    }

    //el servicio espera de parametro un tipo Users
    createUser(usuario: any){ 

        
        return this.prisma.user.create({
            data: usuario
        });
    }

    updateUser(){
        return "Usuario Actualizado"
    }

    deleteUser(){
        return "eliminando Usuario";
    }

    patchUser(){
        return "usuario Parcheado";
    }

}
