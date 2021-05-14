const store = require('./store');

const getCategorias = (id) => store.getCategorias(id);

const addCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        const result = store.addCategoria(categoria);
        resolve(result);
    });
};

const updateCategoria = (id, categoria) => {
    return new Promise((resolve, reject) => {
        const result = store.updateCategoria(id, categoria);
        resolve(result);
    });
};

const deleteCategoria = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            console.error('[categoriesController] No se envió id');
            return reject('No se envió id');
        }
        store.deleteCategoria(id)
            .then(() => resolve())
            .catch(error => reject(error));
    });
};

const getProductosByCategoria = (id) => store.getProductosByCategoria(id);

module.exports = { 
    getCategorias,
    addCategoria,
    updateCategoria,
    deleteCategoria,
    getProductosByCategoria
}