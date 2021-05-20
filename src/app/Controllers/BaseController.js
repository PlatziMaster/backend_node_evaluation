const { MongoClient, ObjectId } = require('mongodb');
const { config } = require("../../config");

class BaseController
{
  constructor(collection) {
    this.dbUser = encodeURIComponent(config.dbUser);
    this.dbPassword = encodeURIComponent(config.dbPassword);
    this.host = config.dbHost;
    this.dbName = config.dbName;
    this.collection = collection;
    this.setMongoUri();
    this.setConnection();
  }

  setMongoUri = () => {
    if (this.host === 'localhost') {
      this.mongoUri = `${config.dbConnection}://${this.dbUser}:${this.dbPassword}@${this.host}:${config.dbPort}/${this.dbName}?retryWrites=true&w=majority`;
    } else {
      this.mongoUri = `mongodb+srv://${this.dbUser}:${this.dbPassword}@${this.host}/${this.dbName}?retryWrites=true&w=majority`;
    }
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