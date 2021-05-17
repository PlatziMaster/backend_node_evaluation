const { nanoid } = require("nanoid")
//en este archivo se mandan a llamar las funciones para consultar la BD
//si es necesario cambiar la BD cambiar la base de datos en el archivo ./index.js
const TABLE = "products"

module.exports = function (injecterStore){
      
      async function list(){
            //el parametro que se esta enviando como null es un query por si se necesita filtrar 
            //con respecto a una parametro en especifico
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
      //dado los requisitos dados no se implenetó la comprobacion de la existenca de la categorias
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