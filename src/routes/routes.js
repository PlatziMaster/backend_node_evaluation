'use strict';
module.exports = (app) => {
	const productRoutes = require('./product');
	const categoryRoutes = require('./category');

	productRoutes(app);
	categoryRoutes(app);
}
