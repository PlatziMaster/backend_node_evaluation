import { Request, Response } from "express";
import ProductService from "../service/product.service";

const productService = new ProductService();

export const getProducts = async ( req: Request, res: Response ) => {
   try {
      const AllProducts = await productService.getAllProduct();

      res.status(200).json({
         data: AllProducts,
         msg: 'All products'
      });

   } catch (error) {
      res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const getProductById = async ( req: Request, res: Response ) => {

   const { productId } = req.params;

   try {
      const productById = await productService.getProductById( productId )

      if( !productById ) {
         return res.status(400).json({
            error: 'Product not exist'
         });
      };

      res.status(200).json({
         data: productById,
         msg: `Product with id: ${productId}`
      })

   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}