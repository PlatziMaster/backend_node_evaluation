'use strict';
const { findAll, findOneById, create, update, remove } = require('../db/queries.js');

const format_response = {completed: false, data: {}}

let collection_name;

module.exports = {
		set_collection: (c_name) => collection_name = c_name,
		get_all: async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await findAll(collection_name);	
				response.completed = true;
			} finally {
				res.json(response);
			}
			
		},
		get_one: async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await findOneById(req.params.id, collection_name);
				response.completed = true;
			} finally {
				res.json(response);
			}
		},
		create:	async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await create(req.body, collection_name);
				response.completed = true;
			} finally {
				res.json(response);
			}
		},
		update: async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await update(req.params.id, req.body, collection_name);
			} finally {
				res.json(response);
			}
		},
		remove:async (req, res) => {
			let response = {...format_response};
			try {
				response.completed = await remove(req.params.id, collection_name);
			} finally {
				res.json(response);
			}
		},
};

