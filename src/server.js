const express = require('express');
const router = express.Router();
const response = require('./network/response');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers)
    res.header({
        'custom-header': 'nuestro valor personalizado',
    })
    // res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes')
});

router.post('/message', function (req, res) {
    console.log(req.body);
    if (req.query.error === 'ok') {
        response.error(req, res, 'error inesperado', 500, 'es solo una simulacion de los errores')
    } else {
        response.success(req, res, 'Creado correctamente', 201)
    }

});


router.delete('/message', function (req, res) {
    console.log(req.query);
    response.success(req, res, 'Mensaje eliminado correctamente')
});

app.listen(3000);

console.log('La aplicación esta escuchando en http://localhost:3000');
