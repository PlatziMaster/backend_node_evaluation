import { Document } from 'mongodb'

/**
 * Interface to the resource service.
 */
export interface ResourceService {
  create(data: Document): Promise<Document | undefined>
  read(): Promise<Document | undefined>
  find(id: string): Promise<Document | undefined>
  update(id: string, data: Document): Promise<Document | undefined>
  delete(id: string): Promise<Document | undefined>
}
