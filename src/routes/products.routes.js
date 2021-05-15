const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Products')
})

module.exports = router