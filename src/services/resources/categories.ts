import { Document } from 'mongodb'
import Store from '../store/mongodb'

const store = new Store('categories')

class Categories {
  static async create(data: Document): Promise<Document | undefined> {
    try {
      const result = await store.create(data)

      return result
    } catch (err) {
      throw err
    }
  }

  static async read(): Promise<Document | undefined> {
    try {
      const result = await store.read()

      return result
    } catch (err) {
      throw err
    }
  }

  static async find(id: string): Promise<Document | undefined> {
    try {
      const result = await store.find(id)

      return result
    } catch (err) {
      throw err
    }
  }

  static async update(
    id: string,
    data: Document
  ): Promise<Document | undefined> {
    try {
      const result = await store.update(id, data)

      return result
    } catch (err) {
      throw err
    }
  }

  static async delete(id: string): Promise<Document | undefined> {
    try {
      const result = await store.delete(id)

      return result
    } catch (err) {
      throw err
    }
  }
}

export default Categories