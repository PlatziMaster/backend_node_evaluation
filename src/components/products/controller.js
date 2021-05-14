const store = require('./store');

const getProducts = (id) => store.getProducts(id);

const addProduct = (name,price,description,categoryId,image) => {
    return new Promise((resolve, reject) => {
        if (!name || !price || !description || !categoryId || !image) {
            console.error('[productController] Datos incompletos');
            return reject('Datos incompletos');
        }
        product = {"name":name, "price":price, "description":description, "categoryId":categoryId, "image":image}
        store.addProduct(product);
        resolve(product);
    });
};

const updateProduct = (id, name, price, description, categoryId, image) => {
    return new Promise((resolve, reject) => {
        if (!id || !name || !price || !description || !categoryId || !image) {
            console.error('[productController] Datos incompletos');
            return reject('Datos incompletos');
        }
        product = {"name":name, "price":price, "description":description, "categoryId":categoryId, "image":image}
        const result = store.updateProduct(id, product);
        resolve(result);
    });
};

const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            console.error('[productController] No se envió id');
            return reject('No se envió id');
        }
        store.deleteProduct(id)
            .then(() => resolve())
            .catch(error => reject(error));
    });
};

module.exports = { 
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}