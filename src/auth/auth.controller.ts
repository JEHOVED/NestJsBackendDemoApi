import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authservice: AuthService
    ){}



    @Get('login')
    login(){
        return [];
    }

    @Get('signUp')
    signUp(){
        return this.authservice.getUsers();
    }


}
