import { Injectable } from '@nestjs/common';

//Importamos InjectModel de mongoose crear para un modelo en base a nuestro schema fruits
import { InjectModel } from '@nestjs/mongoose';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class FruitsService {

  //creamos un constructor para esta clase
  constructor(
    //pasamos como parametro un injectModel([nombre schema en module]) para el modelo
    @InjectModel('Fruit') private fruitModel
  ){}

  //getFruits sera el metodo encargado de traerse todas las frutas
  //usamos async await ya que mongoose puede hacer consultas asincronas
  //el metodo find trae todos los documentos en la coleccion de frutas
  getFruits = async () => await this.fruitModel.find()

  //recibimos el body de la solicitud y lo usamos para crear una nueva fruta
  createFruit = async (body) =>{
    const newFruit = new this.fruitModel(body)
    //regresamos el documento fruta que acabamos de guardar
    return await newFruit.save()
  }

  //Recibimos el id de la fruta a actualizar y el body con la nueva informacion
  updateFruit = async (id, body) => {
    await this.fruitModel.findOneAndUpdate({_id: id}, body)
    return 'Fruit Updated'
  }

  //recibimos el id para borrar un documento en especifico
  deleteFruit = async (id) => {
    await this.fruitModel.findOneAndRemove({_id: id})
    return 'Fruit Deleted'
  }

}