//importamos todas estas funciones que son requeridas para las solicitudes
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

//importamos nuestro FruitsService
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {

  //agreguegamos FruitsService como metodo de nuestra clase
  constructor(private _fruits: FruitsService){}

  //el decorator Get da acceso a la ruta /fruits por el metodo get
  @Get()
  //esta funcion se ejecuta cuando hacemos una peticion get
  GetFruits(){
    return this._fruits.getFruits()
  }

  //el decorator Post da acceso a la ruta /fruits por el metodo post
  @Post()
  //pasamos el decorator Body para acceder a lo que llega a traves del body de la peticion
  //en este caso la informacion para crear nuestra fruta
  CreateFruits(@Body() fruitBody) {
    return this._fruits.createFruit(fruitBody)
  }

  //el decorator Put da acceso a la ruta /fruits por el metodo put
  //modificamos la ruta para poder usar como parametro el valor despues
  //de fruits/ en la ruta fruits/[valor de fruitId]
  @Put(':fruitId')
  updateFruit(@Param('fruitId') fruitId, @Body() fruitBody){
    return this._fruits.updateFruit(fruitId, fruitBody)
  }

  //el decorator Delete da acceso a la ruta /fruits por el metodo delete
  @Delete(':fruitId')
  deleteFruit(@Param('fruitId') fruitId){
    return this._fruits.deleteFruit(fruitId)
  }
}
