import { Express, Router } from 'express'
import { ResourceService } from '../../types'
import create from './create'
import read from './read'
import find from './find'
import replace from './replace'
import update from './update'
import erase from './erase'

/**
 * Class that generate all endpoints for basic CRUD of a resource.
 */
class RouteBuilder {
  resource: string
  service: ResourceService

  /**
   * Create a route builder class.
   *
   * @param resource - Name of the resource.
   * @param service - Instace of the service of the resource.
   */
  constructor(resource: string, service: ResourceService) {
    this.resource = resource
    this.service = service
  }

  /**
   * Mutate the app applying the CRUD endpoints.
   *
   * @param app - The main express application.
   */
  applyTo(app: Express): void {
    const router = Router()

    create(router, this.service)
    read(router, this.service)
    find(router, this.service)
    replace(router, this.service)
    update(router, this.service)
    erase(router, this.service)

    app.use(`/api/${this.resource}`, router)
  }
}

export default RouteBuilder
