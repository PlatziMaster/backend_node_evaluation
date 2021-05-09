'use strict';
const { set_collection, get_all, get_one, create, update, remove } = require('./commonHandler');

const collection_name = 'category';
set_collection(collection_name);

const category = {
	get_all: get_all,
	get_one: get_one,
	create: create,
	update: update,
	remove: remove,
}

module.exports = products;
