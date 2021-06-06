const { Router } = require('express')
const router = Router()

const CategoryRoutes = require('./categoryRouter')
const ProductRoutes = require('./productRouter')

router.use('/api/categories', CategoryRoutes)
router.use('/api/products', ProductRoutes)

module.exports = router