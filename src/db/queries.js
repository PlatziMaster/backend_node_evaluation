const { client, testConnection } = require('./connection.js');
const { ObjectID } = require('mongodb');

const DB_NAME = process.env.MONGO_DB_NAME;

const getCollection = async (name) => {
	try {
		await client.connect();
		const collection = client.db(DB_NAME).collection(name);
		return collection;
	} catch(e) {
		console.error(`error getting the collection: `,e)
	}
}

const closeConnection = async () => await client.close();

const findAll = async (collectionName) => {
	let results = [];
	try {
		const collection = await getCollection(collectionName);
		results = await collection.find().toArray();
		console.log(results);
	} catch(e) {
		console.error(`error fetching all ${collectionName}: `, e);
	}finally {
		await closeConnection();
		return results;
	}
}; 

const findOneById = async (id, collectionName) => {
	let result = null;
	try {
		const collection = await getCollection(collectionName);
		await collection.findOne({_id: id});
	} catch(e) {
		console.error(`error fetching one ${collectionName}: `, e);
	} finally {
		await closeConnection();
		return result;
	}
}

const create = async (data, collectionName) => {
	let result = null;
	try {
		const collection = await getCollection(collectionName);
		await collection.insertOne(data, null, (r) => console.log(r));
	} catch(e) {
		console.error(`error creating at ${collectionName}: `, e);
	} finally {
		await closeConnection();
		return result;
	}
}

const update = async (id, newData, collectionName) => {
	let result = null;
	try {
		const collection = await getCollection(collectionName);
		const filter = { _id: new ObjectID(id) };
		const update = { $set: newData };
		await collection.updateOne(filter, update, {}, (r) => console.log(r));
	} catch(e) {
		console.error(`error updating the ${collectionName} with id: ${id}: `, e);
	} finally {
		await closeConnection();
		return result;
	}
}

const remove = async (id, collectionName) => {
	let result = false;
	try {
		const collection = await getCollection(collectionName);
		const filter = {_id: new ObjectID(id) };
		await collection.deleteOne(filter);
		result = true;
	} catch(e) {
		console.error(`error deleting the ${collectionName} wit id: ${id}: `, e);
	} finally {
		await closeConnection();
		return result;
	}
}

module.exports = {
	findAll: findAll,
	findOneById: findOneById,
	create: create,
	update: update,
	remove: remove,
}

