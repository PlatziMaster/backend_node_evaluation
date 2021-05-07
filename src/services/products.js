const mongoLibrary = require('../lib/mongo');

/**
 * Gets all the existing products in a list
 * @returns {Array<Object>} Products array
*/
async function getAllProducts() {
   try {
      let allProducts =  await (await mongoLibrary.getAll('products')).toArray();
      return allProducts;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Gets the information about one product from the database
 * @param {String} productId Id of the product to be searched 
*/
async function getOneProductById(productId) {
   try {
      let product = await mongoLibrary.getOneById('products', productId);

      return product;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Inserts a new product in the database.
 * @param {Object} productData Body of the new product to be inserted.
 * @returns {Object} Saved product.
 */

async function saveProduct(productData) {
   try {
      let savedProduct = await (await mongoLibrary.saveOne('products', productData)).ops[0];

      return savedProduct;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Finds a product and if exists it will be modified 
 * @param {String} productId Id of the product that will be updated
 * @param {Object} newProductData New body of the product that will be saved
 */
async function updateProduct(productId, newProductData) {
   try {
      let updatedProduct = await mongoLibrary.updateOne('products', productId, newProductData);

      return updatedProduct;
   } catch (error) {
      console.log(error);
   }
}

/**
 * Deletes a product from the database
 * @param {String} productId Id of the product to be deleted
 */
async function deleteProduct(productId) {
   try {
      let deletedProduct = await mongoLibrary.deleteOne('products', productId);

      return deletedProduct;
   } catch (error) {
      console.log(error);
   }
}

module.exports = {
   getAllProducts,
   getOneProductById,
   saveProduct,
   updateProduct,
   deleteProduct
}