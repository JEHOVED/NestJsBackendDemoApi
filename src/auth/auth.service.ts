import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private readonly prismaService: PrismaService){}


    async getUsers(){
        return await this.prismaService.user.findMany();
    }

}
