import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { AnyAaaaRecord } from 'dns';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

            
    
    //se crea el arreglo de tipo usuarios inicializandolo en blanco
    //private listadoUsuarios : CreateUserDto[] = [];

    //metodo para obtener un usuario, por medio de parametro id
    async getUser(Id: number): Promise <CreateUserDto> {
        
        console.log("usuario entrante con id", Id);
        console.log("tipo de ", typeof(Id));
        // let usuarioEncontrado = this.listadoUsuarios.find(usuario => usuario.Id == id);
        // console.log("usuario encontrado", usuarioEncontrado);

        let usuarioEncontrado = await this.prisma.user.findUnique({
            where: {
                Id
            }
        })

        console.log("usuario encontrado", usuarioEncontrado);
        if(!usuarioEncontrado){
            throw new NotFoundException("La tarea con ese ID "+ Id + " no fue encontrada");
        }
        return usuarioEncontrado;
    }

    //se crea un objeto de tipo interfaz, llamado usuarios (un arreglo)
    // y debe de retornar un arreglo de usuarios
    getAllUsers() {
        return this.prisma.user.findMany();
    }

    //el servicio espera de parametro un tipo Users
    createUser(usuario: CreateUserDto){ 

        
        return this.prisma.user.create({
            data: usuario
        });
    }

    async updateUser(Id: number, usuario: UpdateUserDto): Promise <UpdateUserDto>
    {
        
        let actualizarUsuario = await this.prisma.user.update({
            where: {
                Id
            },
            data: usuario
        });

        return actualizarUsuario;
        
    }

    deleteUser(){
        return "eliminando Usuario";
    }

    patchUser(){
        return "usuario Parcheado";
    }

}
