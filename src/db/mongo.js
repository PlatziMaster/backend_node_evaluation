const { MongoClient, ObjectId } = require('mongodb')

const { config } = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName
const HOST = config.dbHost


const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    this.dbName = DB_NAME
  }

  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) reject(err)
          console.log('Connected to mongo')
          resolve(this.client.db(this.dbName))
        })
      })
    }
    return MongoLib.connection
  }

  async getAll(collection, query = "") {
    let con = await this.connect()
    return await con.collection(collection).find(query).toArray()
  }

  async get(collection, id) {
    let con = await this.connect()
    return await con.collection(collection).findOne({ _id: ObjectId(id) })
  }

  async create(collection, data) {
    let con = await this.connect()
    let result = await con.collection(collection).insertOne(data)
    return result
  }

  async update(collection, id, data) {
    let con = await this.connect()
    let result = await con.collection(collection).findOneAndUpdate({ _id: ObjectId(id) }, { $set: data }, { returnOriginal: false })
    return result

  }

  async delete(collection, id) {
    let con = await this.connect()
    let response = await con.collection(collection).deleteOne({ _id: ObjectId(id) })
    return response.deletedCount === 1 ? true : false
  }
}

module.exports = MongoLib