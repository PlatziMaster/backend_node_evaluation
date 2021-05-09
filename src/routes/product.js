'use strict';
module.exports = (app) => {
	const products = require('../controllers/product');

	app.route('/api/products/')
		.get(products.get_all)
		.post(products.create)

	app.route('/api/products/:id')
		.get(products.get_one)
		.put(products.update)
		.delete(products.remove)

};
