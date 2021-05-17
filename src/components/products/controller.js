
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
      return {
            list,
            listProduct,
      }
}