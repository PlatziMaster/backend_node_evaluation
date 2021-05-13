const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("./config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const DB_NAME = config.dbName;
const MONGO_PORT = !config.dbConnectionIsSrv ? `:${config.dbPort}` : "";
const MONGO_URI = `${config.dbConnection}://${USER}:${PASSWORD}@${config.dbHost}${MONGO_PORT}?retryWrites=true&w=majority`;

class Collection {
  constructor(db, name) {
    this.instance = db.collection(name);
  }

  async findAll(options = {}) {
    try {
      return await this.instance.find(options).toArray();
    } catch (error) {
      return [];
    }
  }

  async findOneById(id, options = {}) {
    try {
      return await this.instance.findOne({ _id: new ObjectId(id) }, options);
    } catch (error) {
      return null;
    }
  }

  async insertOne(obj) {
    try {
      return await this.instance.insertOne(obj).then((r) => r.ops[0]);
    } catch (error) {
      return null;
    }
  }
}

class DB {
  constructor() {
    this.instance = null;
    this.categories = null;
    this.products = null;
  }

  async connect() {
    if (!this.instance) {
      const client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      this.instance = client.db(DB_NAME);
      this.categories = new Collection(this.instance, "categories");
      this.products = new Collection(this.instance, "products");
    }
  }
}

const singleton = new DB();

module.exports = singleton;
