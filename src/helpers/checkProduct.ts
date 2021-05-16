import Joi from 'joi';

export const idProduct = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productName = Joi.string()
const productPrice = Joi.number()
const description = Joi.string()
const categoryId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productImg = Joi.string();

export const checkProductSchema = {
   name: productName.required(),
   price: productPrice.required(),
   description: description.required(),
   categoryId,
   image: productImg
}

export const putProductSchema = {
   name: productName,
   price: productPrice,
   description: description,
   categoryId,
   image: productImg
}