import { Request, Response } from "express";
import { categorieModel } from "../lib/model/categories";
import CategorieService from "../service/categories.service";


const categorieService = new CategorieService( categorieModel );

export const getCategories = async ( req: Request, res: Response ) => {
   try {
      const AllProducts = await categorieService.getAllCollection();

      if( AllProducts == [] ) {
         res.status(200).json({
            msg: 'There no categories'
         })
      }

      res.status(200).json({
         data: AllProducts,
         msg: 'All categorie'
      });

   } catch (error) {
      res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const getCategoryById = async ( req: Request, res: Response ) => {

   //get product id in params
   const { categoryId } = req.params;

   try {
      const categoryById = await categorieService.getSingleDoc( categoryId )

      //if products dont exist
      if( !categoryById ) {
         return res.status(400).json({
            error: 'Categorie not exist'
         });
      };

      res.status(200).json({
         data: categoryById,
         msg: `Categorie with id: ${categoryId}`
      })

   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const getByCategoryId = async ( req: Request, res: Response) => {

   //get category id in params
   const { categoryId} = req.params;
   try {
      const productByCategory = await categorieService.getProductByCategories( categoryId );

      if( !productByCategory) {
         return res.status(400).json({
            error: 'There no products with this category'
         });
      };

      res.status(200).json({
         data: productByCategory,
         msg: `Categorie with id: ${categoryId}`
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }

}

export const postCategory = async ( req: Request, res: Response) => {

   //get data in req.body
   const { body: data } = req;

   try {
      const createCategory = await categorieService.postDoc( data );
      res.status(201).json({
         data: createCategory,
         msg: 'Category create'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const putCategory = async ( req: Request, res: Response ) => {
   //get id of product to update and data
   const { categoryId } = req.params;
   const { body: data } = req;
   try {
      const updateCategory = await categorieService.putDoc( categoryId, data)

      if ( !updateCategory ) {
         return res.status(400).json({
            error: "Categorie not exist"
          })
      }

      res.status(200).json({
         data: updateCategory,
         msg: 'Categorie update'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}

export const deleteCategory = async ( req: Request, res: Response ) => {
   const { categoryId } = req.params;
   try {
      const deleteCategory = await categorieService.deleteDoc( categoryId );

      res.status(200).json({
         data: deleteCategory,
         msg: 'Categorie delete'
      })
   } catch (error) {
      return res.status(503).json({
         error: 'Something wrong with the server'
      });
   }
}
