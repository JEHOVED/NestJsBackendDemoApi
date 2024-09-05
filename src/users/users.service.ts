import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { AnyAaaaRecord } from 'dns';
import { UpdateUserDto } from './dto/update-user.dto';
import { Not } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(private servicioPrisma: PrismaService) {}
    //se crea el arreglo de tipo usuarios inicializandolo en blanco
    //metodo para obtener un usuario, por medio de parametro id
    async getUser(Id: number): Promise <CreateUserDto> {
        let usuarioEncontrado = await this.servicioPrisma.user.findUnique({
            where: {
                Id
            }
        })

        if(!usuarioEncontrado){
            throw new NotFoundException("La tarea con ese ID "+ Id + " no fue encontrada");
        }
        return usuarioEncontrado;
    }

    //se crea un objeto de tipo interfaz, llamado usuarios (un arreglo)
    // y debe de retornar un arreglo de usuarios
    getAllUsers() {
        return this.servicioPrisma.user.findMany();
    }

    //el servicio espera de parametro un tipo Users
    createUser(usuario: CreateUserDto){ 
        return this.servicioPrisma.user.create({
            data: usuario
        });
    }

    async updateUser(Id: number, usuario: UpdateUserDto): Promise <UpdateUserDto>
    {
        let actualizarUsuario = await this.servicioPrisma.user.update({
            where: {
                Id
            },
            data: usuario
        });

        if(!actualizarUsuario){
            throw new NotFoundException ("No fue posible actualizar el objeto "+ Id);
        }
        return actualizarUsuario;
    }

    async deleteUser(Id: number, usuario: UpdateUserDto){
        
        let eliminarUsuario = await this.servicioPrisma.user.delete({
            where:{
                Id
            }
        })
        
        if(!eliminarUsuario){
            throw new NotFoundException("El objeto no existe" + Id);
        }

        return eliminarUsuario;
    }

    patchUser(){
        return "usuario Parcheado";
    }

}
