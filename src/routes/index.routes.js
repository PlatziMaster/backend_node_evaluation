import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hi PLatzi Master Api')
})

export default router