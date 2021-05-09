const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

function createApp() { 
  const app = express();
  app.use(cors());
  app.use(express.json());

  // ADD YOUR ROUTES
  routes(app);

  app.get('*', (req, res)=>{
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  return app;
}

module.exports = createApp;
