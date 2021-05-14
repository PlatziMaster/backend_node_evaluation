const express = require('express');
const cors = require('cors');

function createApp() { 
  const app = express();

  const corsOptions = { origin: "http://example.com" };
  
  app.use(cors(corsOptions));
  
  app.use(express.json());

  // ADD YOUR ROUTES
  return app;
}

module.exports = createApp;
