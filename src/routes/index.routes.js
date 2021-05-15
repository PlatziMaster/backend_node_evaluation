const { Router } = require('express')
const { connect } = require('../database')

const router = Router()

router.get('/', (req, res) => {
    res.send('Hi PLatzi Master Api')
})

module.exports = router