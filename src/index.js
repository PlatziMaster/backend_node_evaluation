const { config } = require('./config');
const createApp = require('./app');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = createApp();

app.listen(config.port, err => {

  mongoose.connect('mongodb+srv://platzimaster:platzimaster@platzimaster.ijdub.mongodb.net/test')
.then(db => console.log('db connected'))
  if (err) {
    console.error("Error: ", err);
    return;
  }
});