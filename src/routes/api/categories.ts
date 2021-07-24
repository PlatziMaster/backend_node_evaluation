import { Express, Request, Response, Router } from 'express'

const router = Router()

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 *
 * @returns void
 */
const categories = (app: Express): void => {
  router.post('/', (req: Request, res: Response) => {
    res.send('preparing to create...')
  })

  router.get('/', (req: Request, res: Response) => {
    res.send('preparing to read...')
  })

  router.get('/:id', (req: Request, res: Response) => {
    res.send('preparing to find...')
  })

  router.put('/:id', (req: Request, res: Response) => {
    res.send('preparing to upsert...')
  })

  router.patch('/:id', (req: Request, res: Response) => {
    res.send('preparing to update...')
  })

  router.delete('/:id', (req: Request, res: Response) => {
    res.send('preparing to delete')
  })

  app.use('/api/categories', router)
}

export default categories
