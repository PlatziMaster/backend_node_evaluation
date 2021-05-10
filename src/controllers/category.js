'use strict';
const { set_collection, get_all, get_one, create, update, remove } = require('./commonHandler');
const { findAll, aggregateMatch } = require('../db/queries');
const { ObjectID } = require('mongodb');

const collection = 'category';

const productsByCategory = async (req, res) => {
	const response = {completed: false, data: {}}
	try {
		const column = { "categoryId._id" : req.params.id };
		response.data = await findAll('products', column);
		response.completed = true;
	} finally {
		res.json(response);
	}
}

const category = {
	get_all: get_all(collection),
	get_one: get_one(collection),
	create: create(collection),
	update: update(collection),
	remove: remove(collection),
	productsByCategoy: productsByCategory,
}

module.exports = category;
