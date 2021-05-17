const store = require('./store');

function addProduct(product) {
    return new Promise ((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    listProducts,
    getProduct
};