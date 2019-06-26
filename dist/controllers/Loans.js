"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoan = exports.getAllLoans = exports.deleteLoan = exports.updateLoan = exports.addLoan = undefined;

var _loan = require("../models/loan");

var _loan2 = _interopRequireDefault(_loan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addLoan =
/*#__PURE__*/
exports.addLoan = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var body, loan;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = request.body;
            loan = (0, _loan2["default"])(body);
            _context.next = 5;
            return loan.save();

          case 5:
            response.json({
              status: 200,
              loan: loan
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("Failed to insert loan: ".concat(_context.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function addLoan(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateLoan =
/*#__PURE__*/
exports.updateLoan = function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(request, response) {
    var body, loan;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = request.body;
            _context2.next = 4;
            return _loan2["default"].findByIdAndUpdate(body.id, body, {
              "new": true
            }).lean();

          case 4:
            loan = _context2.sent;
            response.json({
              loan: loan
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log("Failed to update loan: ".concat(_context2.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function updateLoan(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var deleteLoan =
/*#__PURE__*/
exports.deleteLoan = function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(request, response) {
    var loanId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            loanId = request.params.loanId;
            _context3.next = 4;
            return _loan2["default"].findByIdAndDelete(loanId);

          case 4:
            response.sendStatus(200);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("Failed to delete loan: ".concat(_context3.t0));
            response.sendStatus(500);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteLoan(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var getAllLoans =
/*#__PURE__*/
exports.getAllLoans = function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(request, response) {
    var loans;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _loan2["default"].find();

          case 3:
            loans = _context4.sent;
            response.json({
              status: 200,
              loans: loans
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log("Failed to fetch data: ".concat(_context4.t0));
            response.sendStatus(500);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getAllLoans(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var getLoan =
/*#__PURE__*/
exports.getLoan = function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(request, response) {
    var loanId, loan;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            loanId = request.params.loanId;
            _context5.next = 4;
            return _loan2["default"].findById(loanId);

          case 4:
            loan = _context5.sent;
            response.json({
              status: 200,
              loan: loan
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log("Failed to fetch data: ".concat(_context5.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function getLoan(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();