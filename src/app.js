const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


//const cors = require('cors');
const app = express();

//Connecting DB
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('Db connected'))
  .catch(err => console.log(err));
  

//Importing Routes
const indexRoutes = require('./routes/routes');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(fileUpload());

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);


exports.module = app;