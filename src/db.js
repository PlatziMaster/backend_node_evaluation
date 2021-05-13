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

  async updateOne(id, data) {
    try {
      if (Object.keys(data).length === 0) return await this.findOneById(id);
      const filter = { _id: new ObjectId(id) };
      const update = { $set: data };
      await this.instance.updateOne(filter, update);
      return await this.findOneById(id);
    } catch (error) {
      return null;
    }
  }

  async deleteOneById(id) {
    try {
      const result = await this.instance.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    } catch (error) {
      return false;
    }
  }
}

class DB {
  constructor() {
    this.instance = null;
    this.collections = {
      categories: null,
      products: null,
    };
  }

  async connect() {
    if (!this.instance) {
      const client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      this.instance = client.db(DB_NAME);
      this.collections.categories = new Collection(this.instance, "categories");
      this.collections.products = new Collection(this.instance, "products");
    }
  }
}

var singleton = null;

async function getDb() {
  if (singleton == null) {
    singleton = new DB();
  }
  if (singleton.instance == null) {
    await singleton.connect();
  }
  return singleton;
}

module.exports = getDb;
