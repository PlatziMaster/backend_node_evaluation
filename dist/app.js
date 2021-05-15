"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = require('express');

var _require = require('express'),
    json = _require.json;

var cors = require('cors');

var IndexRoutes = require('./routes/index.routes');

var CategoriesRoutes = require('./routes/categories.routes');

var ProductsRoutes = require('./routes/products.routes');

function createApp() {
  return _createApp.apply(this, arguments);
}

function _createApp() {
  _createApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var app;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // SETTINGS
            app = express();
            app.use(cors());
            app.use(express.json()); //MIDDLEWARES

            app.use(json()); // ROUTES

            app.use(IndexRoutes);
            app.use('/api/categories', CategoriesRoutes);
            app.use('/api/products', ProductsRoutes);
            return _context.abrupt("return", app);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createApp.apply(this, arguments);
}

module.exports = createApp;