const { MongoClient, ObjectId } = require("mongodb");

const MONGO_URI =
  "mongodb://localhost:27017/?readPreference=primary&appname=platzi&ssl=false";

const ERROR_MESSAGE = "please try again in a few minutes";

class DataConnection {
  constructor(collection) {
    this.mongo_client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = "platzi_master";
    this.collection = collection;
  }

  async connect() {
    try {
      var connection = await this.mongo_client.connect();
      return true;
    } catch (error) {
      console.log("Connection Failed");
      console.log(error);
      return false;
    }
  }

  async close() {
    try {
      await this.mongo_client.close();
    } catch (error) {}
  }

  async getAll() {
    await this.connect();
    if (this.mongo_client.isConnected()) {
      return this.mongo_client
        .db(this.dbName)
        .collection(this.collection)
        .find()
        .toArray();
    } else {
      return [{ message: ERROR_MESSAGE }];
    }
  }

  async getOne(id) {
    await this.connect();
    if (this.mongo_client.isConnected()) {
      return this.mongo_client
        .db(this.dbName)
        .collection(this.collection)
        .findOne({ _id: ObjectId(id) });
    } else {
      return [{ message: ERROR_MESSAGE }];
    }
  }

  async insertOne(data) {
    await this.connect();
    if (this.mongo_client.isConnected()) {
      return this.mongo_client
        .db(this.dbName)
        .collection(this.collection)
        .insertOne(data);
    } else {
      return [{ message: ERROR_MESSAGE }];
    }
  }

  async updateOne(id, data) {
    await this.connect();
    if (this.mongo_client.isConnected()) {
      return this.mongo_client
        .db(this.dbName)
        .collection(this.collection)
        .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    } else {
      return [{ message: ERROR_MESSAGE }];
    }
  }

  async deleteOne(id) {
    await this.connect();
    if (this.mongo_client.isConnected()) {
      return this.mongo_client
        .db(this.dbName)
        .collection(this.collection)
        .deleteOne({ _id: ObjectId(id) });
    } else {
      return [{ message: ERROR_MESSAGE }];
    }
  }
}

module.exports = DataConnection;
