import { Schema, model } from "mongoose";
import { toLower } from "../../helpers/toLower";


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
      set: toLower
   },
   categoryId: {
      type: Schema.Types.ObjectId,
   },
   image: {
      type: String
   }
});

productSchema.methods.toJSON = function() {
   const { __v, _id, ...rest } = this.toObject();

   rest.id = _id;

   return rest;
}

export const productModel = model( 'Product', productSchema );

