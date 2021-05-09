'use strict';
module.exports = (app) => {
	const productRoutes = require('./product');

	productRoutes(app);
}
