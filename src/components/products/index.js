//index of products
const controller = require('./controller');
const store = require("../../store/mongoDB");

module.exports = controller(new store);