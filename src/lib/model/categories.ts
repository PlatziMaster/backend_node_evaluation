import { Schema, model } from "mongoose";
import { toLower } from "../../helpers/toLower";


const categorieSchema = new Schema({
   name: {
      type: String,
      set: toLower,
      required: [true, 'name is required']
   },
   image: {
      type: String,
      required: [true, 'image is required']
   }
})

categorieSchema.methods.toJSON = function() {
   const { __v, _id, ...rest } = this.toObject();

   rest.id = _id;

   return rest;
}

export const categorieModel = model( 'Categorie', categorieSchema );