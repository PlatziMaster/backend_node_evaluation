const { ObjectId } = require('mongodb');
const mongoMain = require('../config/mongo');

exports.getAll = async function(collection) {
    try {
        const client = await new mongoMain();
        const db = await client.connect()
        const products = await db.collection(collection).find().toArray();
        client.close()
        return products;
    } catch(error) {
        throw new Error(error);
    }
}

exports.getById = async function(collection, Id) {
    try {
        const client = await new mongoMain();
        const db = await client.connect()
        const products = await db.collection(collection).findOne({ _id: ObjectId(Id) });
        client.close()
        return products;
    } catch(error) {
        throw new Error(error);       
    }
}
exports.createElement = async function(collection, params) {
    try {
        const client = await new mongoMain();
        const db = await client.connect();
        return new Promise((resolve, reject) => {
            db.collection(collection).insertOne(
                params, (err, res) => {
                    if (err) throw err;
                    resolve(res.insertedId);
                    client.close()
                }
            )
        });
    } catch(error) {
        throw new Error(error);
    }
}

exports.updateElement = async function(collection, id, params) {
    try {
        const client = await new mongoMain();
        const db = await client.connect();
        const query = { _id: ObjectId(id) }
        const newValues = { $set: params }
        await db.collection(collection).updateOne(
            query, newValues, (err, res) => {
                if (err) throw err;
            }
        )
        const product = await db.collection(collection).findOne(query);
        client.close();
        return product;
    } catch(error) {
        throw new Error(error);
    }
}

exports.deleteElement = async function(collection, id) {
    try {
        const client = await new mongoMain();
        const db = await client.connect()
        const query = { _id: ObjectId(id) }
        await db.collection(collection).deleteOne(query, (err, res) => {
                if (err) throw err;
                client.close()
            }
        )
    } catch(error) {
        throw new Error(error);
    }
}

exports.getElementsByAgregation = async function(collection, filter) {
    try {
        const client = await new mongoMain();
        const db = await client.connect()
        const products = await db.collection(collection).find(filter).toArray();
        console.log(products);
        client.close()
        return products;
    } catch(error) {
        throw new Error(error);       
    }
}