const store = require('./store');

const getProducts = (id) => store.getProducts(id);

const addProduct = (name,price,description,categoryId,image) => {
    return new Promise((resolve, reject) => {
        if (!name || !price || !description || !categoryId || !image) {
            console.error('[messageController] Datos incompletos');
            return reject('Datos incompletos');
        }
        product = {"name":name, "price":price, "description":description, "categoryId":categoryId, "image":image}
        store.addProduct(product);
        resolve(product);
    });
};

module.exports = { 
    getProducts,
    addProduct
}