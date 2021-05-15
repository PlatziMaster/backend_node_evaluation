"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var MongoClient = require('mongodb').MongoClient;

var _require = require('./config'),
    config = _require.config;

function connect() {
  return _connect.apply(this, arguments);
}

function _connect() {
  _connect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var client, db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return MongoClient.connect(config.dbHost, {
              useUnifiedTopology: true
            });

          case 3:
            client = _context.sent;
            db = client.db('platzi-master');
            console.log("Database is connected in MongoAtlas!");
            return _context.abrupt("return", db);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _connect.apply(this, arguments);
}

module.exports = {
  connect: connect
};