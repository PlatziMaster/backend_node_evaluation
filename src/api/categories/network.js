const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const storageMulter = require('../../lib/multerStorage')
const {getCategories, updateCategory, addCategory, deleteCategory} = require('./controller');
const uploadFile = require('../../lib/s3');

const router = express.Router();
const app = express();

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({storage: storageMulter, fileFilter: fileFilter, limits: {fileSize: 1024 * 1024 * 5}});


router.get('/', (req, res) => {
    getCategories()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, 'Unexpected Error', 500, error))
});

router.get('/:categoryId', (req, res) => {
    getCategories(req.params.categoryId)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, "Error al obtener categoria", 400, error))
});

router.post('/', upload.single('image'), async (req, res) => {
    const resultFile = req.file ? await uploadFile(req.file) : ''
    addCategory(req.body, resultFile)
        .then((fullMessage) => response.success(req, res, fullMessage, '201'))
        .catch(error => response.error(req, res, 'Información invalida', 400, 'Error en controlador'))
});

router.put('/:categoryId', upload.single('image'), async (req, res) => {
    const resultFile = req.file ? await uploadFile(req.file) : ''
    updateCategory(req.params.categoryId, req.body, resultFile)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

router.delete('/:categoryId', (req, res) => {
    deleteCategory(req.params.categoryId)
        .then(() => response.success(req, res, `Categoria ${req.params.categoryId} eliminado`))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

router.get('/:categoryId/products', (req, res) => {
    getCategories(req.params.categoryId, true)
        .then(products => response.success(req, res, products))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

app.use(router);

module.exports = router;
