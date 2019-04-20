import { Schema } from "mongoose"

export const FruitSchema = new Schema({
  name: String,
  color: String,
  price: Number
})