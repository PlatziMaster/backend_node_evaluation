const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = config.dbHost;
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?ssl=falseretryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
    this.dbName = DB_NAME;
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            reject(err);
          }
          console.log('A connection was successfully established to mongo');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect().then((err,db) => {
      if (err){
        console.log(err)
      }
      return db
        .collection(collection)
        .find(
          {},
          { projection: query })
        .toArray();
    });
  }

  getSome(collection, id, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .find(
          { categoryId: id },
          { projection: query })
        .toArray();
    });
  }

  get(collection, id, query) {
    return this.connect().then(db => {
      return db
        .collection(collection)
        .findOne(
          { _id: ObjectId(id) },
          { projection: query });
    });
  }

  create(collection, data) {
    return this.connect()
      .then(db => {
        console.log("enter create")
        return db
        .collection(collection)
        .insertOne(data);
      })
      .then(result => result.ops[0]);
  }

  update(collection, id, newValues, query) {
    return this.connect()
      .then(db => {
        return db
          .collection(collection)
          .findOneAndUpdate(
            { _id: ObjectId(id) }, 
            { $set: newValues }, 
            { projection: query,
              returnOriginal: false });
      })
      .then(result => result.value);
  }

  delete(collection, id, query) {
    return this.connect()
      .then(db => {
        return db
        .collection(collection)
        .findOneAndDelete(
          { _id: ObjectId(id) });
      })
      .then(result => result.value);
  }

}

module.exports = MongoLib;