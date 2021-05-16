import { Request, Response } from "express";
import { productModel } from "../lib/model/product";
import CrudService from "../service/crud.service";

const productService = new CrudService( productModel );

export const getProducts = async ( req: Request, res: Response ) => {
   try {
      const AllProducts = await productService.getAllCollection();

      if( AllProducts == [] ) {
         res.status(200).json({
            msg: 'There no products'
         })
      }

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

   //get product id in params
   const { productId } = req.params;

   try {
      const productById = await productService.getSingleDoc( productId )

      //if products dont exist
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

export const postProduct = async ( req: Request, res: Response) => {

   //get data in req.body
   const { body: data } = req;

   try {
      const createProduct = await productService.postDoc( data );
      res.status(201).json({
         data: createProduct,
         masg: 'Product create'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const putProduct = async ( req: Request, res: Response ) => {
   //get id of product to update and data
   const { productId } = req.params;
   const { body: data } = req;
   try {
      const updateProduct = await productService.putDoc( productId, data)

      if ( !updateProduct ) {
         return res.status(400).json({
            error: "Product not exist"
          })
      }

      res.status(200).json({
         data: updateProduct,
         msg: 'Product update'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const deleteProduct = async ( req: Request, res: Response ) => {
   const { productId } = req.params;
   try {
      const deleteProduct = await productService.deleteDoc( productId );

      res.status(200).json({
         data: deleteProduct,
         msg: 'Product delete'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}