import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('projects')
export class ProjectsController {

    //ejemplo de como se trabaja con nextjs

    @Get('/')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url);
        console.log(response.status);
        response.status(200).json({
            message:'Hola mundo'
        });
        //response.status(200).json({});
    }

}
