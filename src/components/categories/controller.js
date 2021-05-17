const { nanoid } = require("nanoid")

const TABLE = "categories"

module.exports = function (injecterStore){
      
      async function list(){
            const result = await injecterStore.listAll(TABLE,null);
            return result;
      }
      async function listCategorie(id){
            const result = await injecterStore.list(TABLE,id);
            return result;
      }
      async function deleteCategorie(id){
            const result = await injecterStore.delete(TABLE,id);
            return result;
      }
      async function insertCategorie(data,id){
            let result
            if(id){
                  result = await injecterStore.update(TABLE, data._id, data);
            }else{
                  data._id = nanoid();
                  result = await injecterStore.create(TABLE, data);
            }
            return result;
      }
      async function searchProduct({id}){
            const query = id && {categoryId: {cat: id}};
            const result = await injecterStore.listAll("products",query);
            return result;
      }
      return {
            list,
            listCategorie,
            deleteCategorie,
            insertCategorie,
            searchProduct
      }
}