const express = require('express');
const router = express.Router();
const response = require('../../network/response')
// Controllers
const {getCategories, updateCategory, addCategory, deleteCategory} = require('./controller')
const app = express();


router.get('/', (req, res) => {
    getCategories()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, 'Unexpected Error', 500, error))
});

router.get('/:id', (req, res) => {
    getCategories(req.params.id)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, "Error al obtener categoria", 400, error))
});

router.post('/', (req, res) => {
    addCategory(req.body.name, req.body.image)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, '201');
        })
        .catch(error => {
            response.error(req, res, 'Información invalida', 400, 'Error en controlador')
        })

});

router.put('/:id', (req, res) => {
    updateCategory(req.params.id, req.body.name, req.body.image)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, res, 'Error interno', 500, error)
        })
});

router.delete('/:id', (req, res) => {
    deleteCategory(req.params.id)
        .then(() => {
            response.success(req, res, `Categoria ${req.params.id} eliminado`);
        })
        .catch(error => {
            response.error(req, res, 'Error interno', 500, error)
        })
});

router.get('/id/products', (req, res) => {
    response.success(req, res, 'Productos con la categoria especificada');
});

app.use(router);

module.exports = router;
