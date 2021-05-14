import { Schema, model } from "mongoose";

function toLower(v: string): string {
   return v.toLowerCase();
 }

const productSchema = new Schema({
   name: {
      type: String,
      set: toLower,
      required: [true, 'name is required']
   },
   price: {
      type: Number,
      required: [true, 'price is required']
   },
   description: {
      type: String,
      set: toLower,
      required: [true, 'description is required']
   },
   categoryId: {
      type: [{
         type: Schema.Types.ObjectId,
         ref: 'Categorie'
      }]
   },
   image: {
      type: String,
      required: [true, 'image is required']
   }
});

export const productModel = model( 'Product', productSchema );

