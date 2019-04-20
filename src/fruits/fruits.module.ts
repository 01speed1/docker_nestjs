import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';

//importamos nuestro schema
import { FruitSchema } from './schemas/fruit.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  //agregamos imports como un array
  imports:[
    // importamos MongooseModule
    MongooseModule.forFeature([
      //agregamos nuestro schame
      {name: "Fruit", schema: FruitSchema}
  ]) ],
  controllers: [FruitsController],
  providers: [FruitsService]
})
export class FruitsModule {}
