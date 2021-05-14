import { Schema, model } from "mongoose";


const categorieSchema = new Schema({
   name: {
      type: String,
      required: [true, 'name is required']
   },
   image: {
      type: String,
      required: [true, 'image is required']
   }
})


export const categorieModel = model( 'Categorie', categorieSchema );