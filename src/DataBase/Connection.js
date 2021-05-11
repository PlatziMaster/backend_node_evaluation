const { MongoClient, ObjectId } = require("mongodb");
const { config } = require('../config/index');

const MONGO_USER = encodeURIComponent(config.dbUser);
const MONGO_PASSWORD = process.env.MONGO_PASS;
const MONGO_HOST = encodeURIComponent(config.dbPassword);
const MONGO_DB_NAME = config.dbName;
const MONGO_URI = process.env.MONGO_URI;

const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

class MongoConnection {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
        this.dbName = MONGO_DB_NAME;
    }

    connect() {
        if(!MongoConnection.connection) {
            MongoConnection.connection = new Promise((resolve, reject) =>{
                this.client.connect(err => {
                    if(err) {
                        reject(err);
                    }
                    console.log('successfull connection!')
                    resolve(this.client.db(this.dbName));
                })
            })
        }
        
        return MongoConnection.connection;
    }

    getAll(colletionName, query) {
        return this.connect().then(db => {
            return db.collection(colletionName).find(query).toArray();
        })
    }

    get(colletionName, id) {
        return this.connect().then(db => {
            return db.collection(colletionName).findOne({ _id: ObjectId(id)})
        })
    }

    create(colletionName, data) {
        return this.connect().then(db => {
            return db.collection(colletionName).insertOne(data)
        }).then(result => result.insertedId);
    }

    update(colletionName, id, data) {
        return this.connect().then(db => {
            return db.collection(colletionName).updateOne({ _id: Object(id)}, { $set: data}, { upsert: true})
        }).then(result => result.upsertedId || id);
    }

    delete(colletionName, id) {
        return this.connect().then(db => {
            return db.collection(colletionName).deleteOne(id);
        }).then(() => id);
    }
}

module.exports = MongoConnection; 
