import MongoDB from "../lib/db";
export default class CrudService {

   private db;
   private model: any;

   constructor( model: any ) {
      this.db = new MongoDB();
      this.model = model;
   }

   get mongo() {
      return this.db;
   }

   async getAllCollection(): Promise<object> {
      this.db.connect();
      const getCollection = await this.model.find();
      this.db.closeDB();

      return getCollection;
   }

   async getSingleDoc( productId: string ): Promise<object> {
      this.db.connect();
      const singleDoc = await this.model.findById( productId );
      this.db.closeDB();

      return singleDoc;
   }

   async postDoc( data: object ): Promise<object> {
      this.db.connect();
      const createDoc = await new this.model( data );
      await createDoc.save();
      this.db.closeDB();

      return createDoc;
   }

   async putDoc( productId: string, data: object ): Promise<object> {
      this.db.connect();
      const putDoc = await this.model.findByIdAndUpdate( productId, data, { new: true});
      this.db.closeDB();

      return putDoc;
   }

   async deleteDoc( productId: string ): Promise<object> {
      this.db.connect();
      const deleteDoc = await this.model.findByIdAndDelete( productId );
      this.db.closeDB();

      return deleteDoc;
   }

}
