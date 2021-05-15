"use strict";

var _require = require('./config'),
    config = _require.config;

var createApp = require('./app');

var app = createApp();
app.listen(config.port, function (err) {
  if (err) {
    console.error("Error: ", err);
    return;
  }
});