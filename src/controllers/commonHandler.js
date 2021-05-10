'use strict';
const { findAll, findOneById, create, update, remove } = require('../db/queries.js');

const format_response = {completed: false, data: {}}


module.exports = {
		get_all: (collection_name) => async (req, res) => {
			let response = [];
			try {
				response = await findAll(collection_name);	
			} catch {
				res.sendStatus(404);
			}finally {
				//res.sendStatus(200);
				res.json(response);
			}
			
		},
		get_one: (collection_name) => async (req, res) => {
			let response = {};
			try {
				response = await findOneById(req.params.id, collection_name);
			} finally {
				res.json(response);
			}
		},
		create:	(collection_name) => async (req, res) => {
			let response = {...format_response};
			try {
				response.data = await create(req.body, collection_name);
				response.completed = true;
			} catch {
				res.sendStatus(404);
			} finally {
				res.sendStatus(201)
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
			let response = false;
			try {
				await remove(req.params.id, collection_name);
				response = true;
			} finally {
				res.json(response);
			}
		},
};

