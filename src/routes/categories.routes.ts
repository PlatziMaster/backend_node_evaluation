import express from 'express';
import * as ctrl from '../controllers/categorie.controller';
import { checkCategorySchema, idCategory } from '../helpers/checkCategory';
import { validationHandler } from '../helpers/validate';

export const categorieRouter = express.Router();


//GET all category
categorieRouter.get('/', ctrl.getCategories);

//GET one category by id
categorieRouter.get('/:categoryId', ctrl.getCategoryById);

//GET products by category
categorieRouter.get('/:categoryId/products', validationHandler({ categoryId: idCategory }),ctrl.getByCategoryId);

//POST create category
categorieRouter.post('/', validationHandler(checkCategorySchema),ctrl.postCategory);

//PUT update category
categorieRouter.put('/:categoryId', validationHandler({ categoryId: idCategory }, 'params'),ctrl.putCategory);

//DELETE category
categorieRouter.delete('/:categoryId', validationHandler({ categoryId: idCategory }),ctrl.deleteCategory);