const app = require('express')()
const cors = require('cors');
const api = require('../src/routes/api')

app.use(cors());
//app.use(express.json());
app.use('/api', api)

module.exports = app
