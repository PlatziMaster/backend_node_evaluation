const { client, testConnection } = require('./connection.js');
const { ObjectID } = require('mongodb');

const DB_NAME = process.env.MONGO_DB_NAME;

const getCollection = async (name) => {
	try {
		await client.connect();
		const collection = client.db().collection(name);
		return collection;
	} catch(e) {
		console.error(`error getting the collection: `,e)
	}
}

const closeConnection = async () => await client.close();

const findAll = async (collectionName) => {
	try {
		const collection = await getCollection(collectionName);
		const result = await collection.find().toArray();
		return result;
	} catch(e) {
		console.error(`error fetching all ${collectionName}: `, e);
	}
}; 

const findOneById = async (id, collectionName) => {
	let result;
	try {
		const collection = await getCollection(collectionName);
		result = await collection.findOne({_id: new ObjectID(id)});
	} catch(e) {
		console.error(`error fetching one ${collectionName}: `, e);
		result = 'not doc found';
	} finally {
		return result;
	}

};

const create = async (data, collectionName) => {
	try {
		const collection = await getCollection(collectionName);
		const result = await collection.insertOne(data).then(r => r.ops[0]);
		return result;
	} catch(e) {
		console.error(`error creating at ${collectionName}: `, e);
	}
};

const update = async (id, newData, collectionName) => {
	try {
		const collection = await getCollection(collectionName);
		const filter = { _id: new ObjectID(id) };
		const update = { $set: newData };
		const result = await collection.updateOne(filter, update, {}, (r) => console.log(r)).then(r => r.ops[0]);
		return result
	} catch(e) {
		console.error(`error updating the ${collectionName} with id: ${id}: `, e);
	}
};

const remove = async (id, collectionName) => {
	try {
		const collection = await getCollection(collectionName);
		const filter = {_id: new ObjectID(id) };
		await collection.deleteOne(filter);
		return true;
	} catch(e) {
		console.error(`error deleting the ${collectionName} wit id: ${id}: `, e);
		return false;
	}
};

module.exports = {
	findAll: findAll,
	findOneById: findOneById,
	create: create,
	update: update,
	remove: remove,
};
