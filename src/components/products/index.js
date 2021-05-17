//index of products
const controller = require('./controller');
const store = require("../../store/mongoDB");
//a este punto elegí separar la base de datos del resto del codigo, por si llegado el caso se requiere cambiar
//la base de datos será necesario implementar las funciones y simplemente cambiar la ubicacion de store
module.exports = controller(new store);