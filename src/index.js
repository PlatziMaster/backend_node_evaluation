//Importaciones de paquetes y clases
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Importación del archivo de conección



require("dotenv").config({ path: ".env" }); // Uso de la libreria dotenv para implemnatar el uso de variables de entorno
db(process.env.DB_CONNECT);// conexion a la base de datos

// Apartado de rutas de componentes (Categorias y productos)
const router = require('./network/routes');


//Apartado de uso de componentes
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Pasarle servidor de expres a route para crear todas las rutas
router(app);

app.use('/', function (req, res) {
    res.send('hola');
});

// servidor 
app.listen(3000);
console.log('La aplicación esta escuchando en el puero http://localhost:3000');;