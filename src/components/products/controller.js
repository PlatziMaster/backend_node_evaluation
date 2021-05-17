const { nanoid } = require("nanoid")

const TABLE = "products"

module.exports = function (injecterStore){
      
      async function list(){
            const result = await injecterStore.listAll(TABLE,null);
            return result;
      }
      async function listProduct(id){
            const result = await injecterStore.list(TABLE,id);
            return result;
      }
      async function deleteProduct(id){
            const result = await injecterStore.delete(TABLE,id);
            return result;
      }
      async function insertProduct(data,id){
            let result
            if(id){
                  result = await injecterStore.update(TABLE, data._id, data);
            }else{
                  data._id = nanoid();
                  result = await injecterStore.create(TABLE, data);
            }
            return result;
      }
      return {
            list,
            listProduct,
            deleteProduct,
            insertProduct,
      }
}