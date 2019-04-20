import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { FruitsModule } from './fruits/fruits.module';

//Importamos vMongooseModule

@Module({
  imports: [
    //dentro de imports ubicamos la ruta de nuestra db y le ponemos un nombre
    //como mongo esta en un contenedor no usamos localhost sino el nombre del contenedor
    //recuerden que yo use [mongo_db] si lo cambian  en el docker-compose, tambien lo deben
    //cambiar aqui
    MongooseModule.forRoot('mongodb://mongo_db:27017/my_nest_db'),
    FruitsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
