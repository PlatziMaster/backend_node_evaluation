const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override')
const cors = require('cors');
const morgan = require('morgan')


function createApp() {
  
  // Initializations
  const app = express()
  app.use(cors());


  // Settings

    // Config views and laouts - partials
  app.set('views', path.join(__dirname, 'views'))
  app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }))
  app.set('view engine', '.hbs')

    // Middlewares
  app.use(express.urlencoded({ extended: false }))  // Formularios
  app.use(methodOverride('_method'))                // Enviar métodos desde formularios
  app.use(express.json());                          // Interpretar JSON
  app.use(morgan('dev'))                            // Ver peticiones por consola

    // Routes
  app.use(require('./routes/index.routes'))
  app.use(require('./routes/products.routes'))
  app.use(require('./routes/categories.routes'))

    // Static Files
  app.use(express.static(path.join(__dirname, 'public')))

  return app;
}

module.exports = createApp;
