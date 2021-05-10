'use strict';
const { set_collection, get_all, get_one, create, update, remove } = require('./commonHandler');

const collection = 'products';

const products = {
	get_all: get_all(collection),
	get_one: get_one(collection),
	create: create(collection),
	update: update(collection),
	remove: remove(collection),
}

module.exports = products;

