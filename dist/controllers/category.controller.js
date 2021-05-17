"use strict";

var _category = _interopRequireDefault(require("../models/category.model"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _database = require("../database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

exports.newCategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var category;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            category = new _category["default"](req.body);
            (0, _database.connect)();
            _context.prev = 2;
            _context.next = 5;
            return category.db.save().then(function (result) {
              res.status(200).json({
                message: 'Category save correctly'
              });

              _mongoose["default"].connection.close();
            });

          case 5:
            return _context.abrupt("return", result);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log("Error de: ".concat(_context.t0));
            next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();