const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const storageMulter = require('../../lib/multerStorage')
const {addProduct, getProducts, updateProduct, deleteProduct} = require('./controller');
const uploadFile = require('../../lib/s3')

const app = express();
const router = express.Router();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({storage: storageMulter, fileFilter: fileFilter, limits: {fileSize: 1024 * 1024 * 5}});

router.get('/', (req, res) => {
    getProducts()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, 'Unexpected Error', 500, error))
});

router.get('/:id', (req, res) => {
    getProducts(req.params.id)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, "Error al obtener el producto", 400, error))
});

router.post('/', upload.single('image'), async (req, res) => {
    const resultFile = req.file ? await uploadFile(req.file) : ''
    addProduct(req.body, resultFile)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

router.put('/:id', upload.single('image'), async (req, res) => {
    const resultFile = req.file ? await uploadFile(req.file) : ''
    updateProduct(req.params.id, req.body, resultFile)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

router.delete('/:id', (req, res) => {
    deleteProduct(req.params.id)
        .then(() => response.success(req, res, `Producto ${req.params.id} eliminado`))
        .catch(error => response.error(req, res, 'Error interno', 500, error))
});

app.use(router);

module.exports = router;
