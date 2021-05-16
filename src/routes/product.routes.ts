import express from 'express';
import * as ctrl from '../controllers/product.controller'
import { checkProductSchema, idProduct } from '../helpers/checkProduct';
import { validationHandler } from '../helpers/validate';

export const productRouter = express.Router();

//GET all products
productRouter.get('/', ctrl.getProducts);

//GET one Product by id
productRouter.get('/:productId', validationHandler({ productId: idProduct }),ctrl.getProductById);

//POST create product
productRouter.post('/', validationHandler(checkProductSchema),ctrl.postProduct);

//PUT update product
productRouter.put('/:productId', validationHandler({ productId: idProduct }, 'params'),ctrl.putProduct);

//DELETE product
productRouter.delete('/:productId', validationHandler({ productId: idProduct }),ctrl.deleteProduct);