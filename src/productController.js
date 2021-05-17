const store = require('./store');

function addProduct(product) {
    return new Promise ((resolve, reject) => {

        if (!product) {
            return reject('La solicitud es incorrecta');
        }

        const newProduct = {
            name: product.name,
            price: product.price,
            description: product.description,
            categoryId: product.categoryId,
            image: product.image
        }

        resolve(newProduct);
    })
}

function listProducts(product) {
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