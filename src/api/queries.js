const { ObjectId } = require('mongodb');
const mongoMain = require('../db/mongo');

async function getDocs(collection) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        const docs = await db.collection(collection).find().toArray();
        client.dbDisconnect();
        return docs;
    } catch(e) {
        throw new Error(e);
    }
}

async function getDocById(collection, Id) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        const doc = await db.collection(collection).findOne({ _id: ObjectId(Id) });
        client.dbDisconnect();
        return doc;
    } catch(e) {
        throw new Error(e);       
    }
}
async function createDoc(collection, fields) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        return new Promise((resolve, reject) => {
            db.collection(collection).insertOne(
                fields, (err, res) => {
                    if (err) throw err;
                    resolve(res.insertedId);
                    client.dbDisconnect();
                }
            )
        });
    } catch(e) {
        throw new Error(e);
    }
}

async function updateDoc(collection, id, fields) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        const query = { _id: ObjectId(id) };
        const newValues = { $set: fields };
        await db.collection(collection).updateOne(
            query, newValues, (err, res) => {
                if (err) throw err
            }
        )
        const doc = await db.collection(collection).findOne(query);
        client.dbDisconnect();
        return doc;
    } catch(e) {
        throw new Error(e);
    }
}

async function deleteDoc(collection, id) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        const query = { _id: ObjectId(id) };
        await db.collection(collection).deleteOne(
            query, (err, res) => {
                if (err) throw err;
                client.dbDisconnect();
            }
        )
    } catch(e) {
        throw new Error(e);
    }
}

async function getGroupedDocs(collection, groupBy) {
    try {
        const client = new mongoMain();
        const db = await client.dbConnect();
        const docs = await db.collection(collection).find(groupBy).toArray();
        client.dbDisconnect();
        return docs;
    } catch(e) {
        throw new Error(e);       
    }
};

module.exports = {
    getDocs,
    getDocById,
    createDoc,
    updateDoc,
    deleteDoc,
    getGroupedDocs
};