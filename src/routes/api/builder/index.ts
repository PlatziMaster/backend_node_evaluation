import { Express, Router } from 'express'
import { ResourceService } from '../../../types'
import create from './create'
import read from './read'
import find from './find'
import replace from './replace'
import update from './update'
import erase from './erase'

const router = Router()

/**
 * Generate all endpoints for basic CRUD.
 *
 * @param app - Express application.
 * @param resource - Name of the resource.
 * @param service - Intance of the resource service.
 */
const builder = (
  app: Express,
  resource: string,
  service: ResourceService
): void => {
  create(router, service)
  read(router, service)
  find(router, service)
  replace(router, service)
  update(router, service)
  erase(router, service)

  app.use(`/api/${resource}`, router)
}

export default builder
