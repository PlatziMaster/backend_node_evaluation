'use strict';
module.exports = (app) => {
	const category = require('../controllers/category');

	app.route('/api/categories/')
		.get(category.get_all)
		.post(category.create)

	app.route('/api/categories/:id')
		.get(category.get_one)
		.put(category.update)
		.delete(category.remove)

};
