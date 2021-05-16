import Joi from 'joi';

export const idCategory = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productName = Joi.string()
const productImg = Joi.string();

export const checkCategorySchema = {
   name: productName.required(),
   image: productName

}

export const putCheckCategory = {
   name: productName,
   image: productName

}