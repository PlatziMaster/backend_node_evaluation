const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.MONGO_USER);
const PASSWORD = encodeURIComponent(config.MONGO_PASSWORD);
const DB_NAME = config.MONGO_DB_NAME;

const MONGO_URI = `${config.MONGO_CONNECTION}://${USER}:${PASSWORD}@${config.MONGO_HOST}:${config.MONGO_PORT}?retryWrites=true&w=majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.DB_NAME = DB_NAME;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(this.client.db(this.DB_NAME));
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
            .then((result) => result);
    }

    update(collection, id, data) {
        return this.connect()
            .then((db) => {
                return db.collection(collection).findOneAndUpdate(
                    {
                        _id: ObjectId(id),
                    },
                    { $set: data },
                    { returnOriginal: false }
                );
            })
            .then((result) => result);
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
