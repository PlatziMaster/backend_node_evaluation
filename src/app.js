//Importaciones de paquetes y clases
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Importación del archivo de conección



require("dotenv").config({ path: ".env" }); // Uso de la libreria dotenv para implemnatar el uso de variables de entorno
db(process.env.DB_CONNECT);// conexion a la base de datos

// Apartado de rutas de componentes (Categorias y productos)
const router = require('./network/routes');


function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.json());

    // Pasarle servidor de expres a route para crear todas las rutas
    router(app);

    // ADD YOUR ROUTES
    return app;
}

module.exports = createApp;