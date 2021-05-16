// Importaciónes de moongose
const db = require('mongoose');
const { config } = require('./config/index');

// Cargar variables de conexión globales ala archivo de db
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const DB_HOST = encodeURIComponent(config.dbHost);

// Creación de una URL de conexión
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Indicarle a mongoose que utilice promesas para responder
db.Promise = global.Promise;

async function connect() {
    // Conexión a la base de datos
    await db.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connect;