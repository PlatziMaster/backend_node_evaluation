const mongoLibrary = require('../lib/mongo');

async function getAllProducts() {
   mongoLibrary.getAll('products');
}

async function saveProduct(productData) {
   console.log(productData)
   let savedProduct = await mongoLibrary.saveOne('products', productData);

   return savedProduct;
}

module.exports = {
   getAllProducts,
   saveProduct
}