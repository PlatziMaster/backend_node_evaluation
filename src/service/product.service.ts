import MongoDB from "../lib/db";
import { productModel } from "../model/product";



export default class ProductService {

   private db;
   private productModel: any;

   constructor() {
      this.db = new MongoDB();
      this.productModel = productModel;
   }

   async getAllProduct(): Promise<object> {
      this.db.connect();
      const getProducts = await this.productModel.find();
      this.db.closeDB();

      return getProducts;
   }

   async getProductById( productId: string ): Promise<object> {
      this.db.connect();
      const getById = await this.productModel.findById( productId );
      this.db.closeDB();

      return getById;
   }

   async postProduct( data: object ): Promise<object> {
      this.db.connect();
      const createProduct = await new this.productModel( data );
      await createProduct.save();
      this.db.closeDB();

      return createProduct;
   }

   async putProduct( productId: string, data: object ): Promise<object> {
      this.db.connect();
      const updateProduct = await this.productModel.findByIdAndUpdate( productId, data, { new: true});
      this.db.closeDB();

      return updateProduct;
   }

   async deleteProduct( productId: string ): Promise<object> {
      this.db.connect();
      const deleteProduct = await this.productModel.findByIdAndDelete( productId );
      this.db.closeDB();

      return deleteProduct;
   }

}