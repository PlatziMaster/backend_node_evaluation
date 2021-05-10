'use strict';
const { findAll, findOneById, create, update, remove } = require('../db/queries.js');

const format_response = {completed: false, data: {}}


module.exports = {
		get_all: (collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await findAll(collection_name);	
				response.completed = true;
			} finally {
				res.json(response);
			}
			
		},
		get_one: (collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await findOneById(req.params.id, collection_name);
				response.completed = response.data instanceof Object;
			} finally {
				res.json(response);
			}
		},
		create:	(collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await create(req.body, collection_name);
				response.completed = true;
			} finally {
				res.json(response);
			}
		},
		update: (collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.completed = await update(req.params.id, req.body, collection_name);
			} finally {
				res.json(response);
			}
		},
		remove: (collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.completed = await remove(req.params.id, collection_name);
			} finally {
				res.json(response);
			}
		},
};

