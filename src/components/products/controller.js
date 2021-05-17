
const TABLE = "products"

module.exports = function (injecterStore){
      
      async function list(){
            
            const prueba = await injecterStore.listAll(TABLE,null);
            return prueba;
      }
      return {
            list,
      }
}