"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('mongodb'),
    ObjectID = _require2.ObjectID;

var _require3 = require('../database'),
    connect = _require3.connect;

var _require4 = require('./index.routes'),
    route = _require4.route;

router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var db, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return connect();

          case 3:
            db = _context.sent;
            _context.next = 6;
            return db.collection('categories').find({}).toArray();

          case 6:
            result = _context.sent;
            res.json(result);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log("Error is: ".concat(_context.t0));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var db, category, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return connect();

          case 3:
            db = _context2.sent;
            category = {
              name: req.body.name,
              image: req.body.image
            };
            _context2.next = 7;
            return db.collection('categories').insertOne(category);

          case 7:
            result = _context2.sent;
            res.json(result.ops[0]);
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log("Error creating is: ".concat(_context2.t0));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/:id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return connect();

          case 4:
            db = _context3.sent;
            _context3.next = 7;
            return db.collection('categories').findOne({
              _id: ObjectID(id)
            });

          case 7:
            result = _context3.sent;

            if (result === null || '' || false) {
              res.json("Consult ".concat(id, " don't exist"));
            } else {
              res.json(result);
            }

            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.log("Error consulting category: ".concat(_context3.t0));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router["delete"]('/:id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, db, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return connect();

          case 4:
            db = _context4.sent;
            _context4.next = 7;
            return db.collection('categories').findOneAndDelete({
              _id: ObjectID(id)
            });

          case 7:
            result = _context4.sent;
            res.json({
              message: "Category ".concat(id, " is delete"),
              result: result
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log("Error consulting category: ".concat(_context4.t0));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.put('/:id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, updateCategory, db, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            updateCategory = {
              name: req.body.name,
              image: req.body.image
            };
            _context5.next = 5;
            return connect();

          case 5:
            db = _context5.sent;
            _context5.next = 8;
            return db.collection('categories').updateOne({
              _id: ObjectID(id)
            }, {
              $set: updateCategory
            });

          case 8:
            result = _context5.sent;
            res.json({
              message: "Category ".concat(id, " is update"),
              result: result
            });
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            console.log("Error consulting category: ".concat(_context5.t0));

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
module.exports = router;