const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.MONGO_USER);
const PASSWORD = encodeURIComponent(config.MONGO_PASSWORD);
const DB_NAME = config.MONGO_DB_NAME || "products";

const MONGO_URI = `${config.MONGO_CONNECTION}://${USER}:${PASSWORD}@${config.MONGO_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        console.log("Connected to database");
                        resolve(this.client.db(this.dbName));
                    }
                });
            });
        }
        return MongoLib.connection;
    }

    getAll(collection, query = null) {
        return this.connect().then((db) => {
            return db.collection(collection).find(query).toArray();
        });
    }

    get(collection, id) {
        return this.connect().then((db) => {
            return db.collection(collection).findOne({
                _id: ObjectId(id),
            });
        });
    }

    create(collection, data) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).insertOne(data);
            })
            .then((result) => result.insertedId);
    }

    update(collection, id, data) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).updateOne(
                    {
                        _id: ObjectId(id),
                    },
                    { $set: data },
                    { upsert: true }
                );
            })
            .then((result) => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect()
            .then((db) => {
                return db
                    .collection(collection)
                    .deleteOne({ _id: ObjectId(id) });
            })
            .then(() => id);
    }
}

module.exports = MongoLib;
