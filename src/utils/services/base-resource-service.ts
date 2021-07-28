import { Document } from 'mongodb'
import { ResourceService, StoreService } from '../../types'
import Store from '../../services/store/mongodb'

class BaseResourceService implements ResourceService {
  store: StoreService

  constructor(resource: string) {
    this.store = new Store(resource)
  }

  async create(data: Document): Promise<Document | undefined> {
    try {
      const result = await this.store.create(data)

      return result
    } catch (err) {
      throw err
    }
  }

  async read(): Promise<Document | undefined> {
    try {
      const result = await this.store.read()

      return result
    } catch (err) {
      throw err
    }
  }

  async find(id: string): Promise<Document | undefined> {
    try {
      const result = await this.store.find(id)

      return result
    } catch (err) {
      throw err
    }
  }

  async update(id: string, data: Document): Promise<Document | undefined> {
    try {
      const result = await this.store.update(id, data)

      return result
    } catch (err) {
      throw err
    }
  }

  async delete(id: string): Promise<Document | undefined> {
    try {
      const result = await this.store.delete(id)

      return result
    } catch (err) {
      throw err
    }
  }
}

export default BaseResourceService
