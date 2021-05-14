const store = require('./store');

const getCategorias = (id) => store.getCategorias(id);

const addCategoria = (name, image) => {
    return new Promise((resolve, reject) => {
        if (!name || !image) {
            console.error('[categoriesController] Datos incompletos');
            return reject('Datos incompletos');
        }
        categoria = {"name":name, "image":image}
        store.addCategoria(categoria);
        resolve(categoria);
    });
};

const updateCategoria = (id, name, image) => {
    return new Promise((resolve, reject) => {
        if (!id || !name || !image) {
            console.error('[categoriesController] Datos incompletos');
            return reject('Datos incompletos');
        }
        categoria = {"name":name, "image":image}
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

module.exports = { 
    getCategorias,
    addCategoria,
    updateCategoria,
    deleteCategoria
}