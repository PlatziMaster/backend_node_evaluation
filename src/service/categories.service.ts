import { productModel } from "../lib/model/product";
import CrudService from "./crud.service";

export default class CategorieService extends CrudService {

   private productModel;

   constructor( model: any ) {
      super( model );
      this.productModel = productModel;
   }

   async getProductByCategories( categoryId: string ): Promise<object> {
      this.mongo.connect();
      const findByCategoryId = await this.productModel.find( { categoryId: categoryId } )
      this.mongo.closeDB();

      return findByCategoryId;
   }

}