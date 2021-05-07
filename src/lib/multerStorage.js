const multer = require('multer');
const {config} = require('../config');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `public/${config.filesRoute}`);
    },
    filename: function (req, file, cb) {
        const [name, extension] = file.originalname.split('.');
        cb(null, `${name}-${Date.now()}.${extension}`);
    }
});

module.exports = storage;
