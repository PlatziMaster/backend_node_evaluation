import { Collection, Document, MongoClient, ObjectId } from 'mongodb'
import { database as db } from '../../config'
import { getConnectionString } from '../../utils/mongodb'

const uri = getConnectionString()

class MongoDB {
  private client
  private resource

  /**
   * Create a class of a store service using mongodb
   *
   * @param resource - Name of the api resource.
   */
  constructor(resource: string) {
    this.client = new MongoClient(uri)
    this.resource = resource
  }

  /**
   * Obtain the respective collection of the resource.
   *
   * @returns Promise object that represents a collection
   */
  private getCollection(): Promise<Collection> {
    return new Promise((resolve, reject) => {
      this.client.connect((err) => {
        if (err) {
          reject(err)
        }

        const database = this.client.db(db.name)
        const collection = database.collection(this.resource)

        resolve(collection)
      })
    })
  }

  /**
   * Insert a new document in the resource collection.
   *
   * @param data - Data sended from request.
   *
   * @returns The resource document recently inserted.
   */
  async create(data: Document): Promise<Document | undefined> {
    try {
      const collection = await this.getCollection()
      const created = await collection.insertOne(data)
      const id = created.insertedId
      const query = { _id: id }
      const result = await collection.findOne(query)

      return result
    } catch (err) {
      throw err
    } finally {
      await this.client.close()
    }
  }

  /**
   * Show all resource collection.
   *
   * @param queryParams - Query params sended from request.
   *
   * @returns List the resource documents.
   */
  async read(): Promise<Document | undefined> {
    // TODO: Process query params to obtain options.
    // eg. filters, sorts and order.
    try {
      const collection = await this.getCollection()
      const query = {}
      const options = {}
      const cursor = await collection.find(query, options)
      const result = await cursor.toArray()

      return result
    } catch (err) {
      throw err
    } finally {
      await this.client.close()
    }
  }

  /**
   * Show a single resource document.
   *
   * @param id - Resource indentifier sended from request.
   *
   * @returns A resource document.
   */
  async find(id: string): Promise<Document | undefined> {
    try {
      const collection = await this.getCollection()
      const query = { _id: new ObjectId(id) }
      const result = await collection.findOne(query)

      return result
    } catch (err) {
      throw err
    } finally {
      await this.client.close()
    }
  }

  /**
   * Modify a single resource document.
   *
   * @param id - Resource indentifier sended from request.
   * @param data - Data sended from request.
   *
   * @returns A resource document.
   */
  async update(id: string, data: Document): Promise<Document | undefined> {
    try {
      const collection = await this.getCollection()
      const query = { _id: new ObjectId(id) }
      const update = { $set: { ...data } }
      await collection.updateOne(query, update)
      const result = await collection.findOne(query)

      return result
    } catch (err) {
      throw err
    } finally {
      await this.client.close()
    }
  }

  /**
   * Erase a single resource document.
   *
   * @param id - Resource indentifier sended from request.
   */
  async delete(id: string): Promise<Document | undefined> {
    try {
      const collection = await this.getCollection()
      const query = { _id: new ObjectId(id) }
      await collection.deleteOne(query)

      return
    } catch (err) {
      throw err
    } finally {
      await this.client.close()
    }
  }
}

export default MongoDB
