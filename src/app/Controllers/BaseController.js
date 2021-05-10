const { MongoClient, ObjectId } = require('mongodb');
const { config } = require("../../config");

class BaseController
{
  constructor(collection) {
    this.dbUser = encodeURIComponent(config.dbUser);
    this.dbPassword = encodeURIComponent(config.dbPassword);
    this.dbName = config.dbName;
    this.mongoUri = `${config.dbConnection}://${this.dbUser}:${this.dbPassword}@${config.dbHost}:${config.dbPort}/${this.dbName}`;
    this.collection = collection;
    this.setConnection();
  }

  setConnection = async () => {
    const client = new MongoClient(this.mongoUri);
    await client.connect();
    this.database = client.db(this.dbName);
  }

  get = async () => {
    let data = await this.database.collection(this.collection)
      .find()
      .toArray();
    return data;
  }

  getDetail = async (id) => {
    let data = await this.database.collection(this.collection)
      .findOne({ _id: ObjectId(id) });
    return data;
  }

  post = async (data) => {
    let response = await this.database.collection(this.collection)
      .insertOne(data);
    return response;
  }

  update = async (id, data) => {
    let response = await this.database.collection(this.collection)
      .updateOne(
        { _id: ObjectId(id) }, {$set: data}
      );

    return response;
  }

  delete = async (id) => {
    let response = await this.database.collection(this.collection)
      .deleteOne({ _id: ObjectId(id) });

    return response;
  }
}

module.exports = BaseController;