import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
//se agrega el ConfiguModule para la variable de entorno con la cadena de conexion de la bDD
@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, ProductsModule, 
    ConfigModule.forRoot(
    {
      envFilePath: '.env',
      isGlobal: true,
      
    }, 
  )],
  
})
export class AppModule {}
