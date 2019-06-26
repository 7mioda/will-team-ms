"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoanContract = exports.getAllLoanContracts = exports.deleteLoanContract = exports.updateLoanContract = exports.addLoanContract = undefined;

var _LoanContract = require("../models/LoanContract");

var _LoanContract2 = _interopRequireDefault(_LoanContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addLoanContract =
/*#__PURE__*/
exports.addLoanContract = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var body, files, toPersistFiles, loanContractData, loanContract;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            body = request.body, files = request.files;
            toPersistFiles = files.map(function (_ref2) {
              var url = _ref2.url;
              return url;
            });
            loanContractData = Object.assign({}, body, {
              files: toPersistFiles
            });
            loanContract = (0, _LoanContract2["default"])(loanContractData);
            _context.next = 7;
            return loanContract.save();

          case 7:
            response.json({
              status: 200,
              loanContract: loanContract
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log("Failed to insert LoanContract: ".concat(_context.t0));
            response.sendStatus(500);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function addLoanContract(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateLoanContract =
/*#__PURE__*/
exports.updateLoanContract = function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(request, response) {
    var body, loanContract;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = request.body;
            _context2.next = 4;
            return _LoanContract2["default"].findByIdAndUpdate(body.id, body, {
              "new": true
            }).lean();

          case 4:
            loanContract = _context2.sent;
            response.json({
              loanContract: loanContract
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log("Failed to update LoanContract: ".concat(_context2.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function updateLoanContract(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteLoanContract =
/*#__PURE__*/
exports.deleteLoanContract = function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(request, response) {
    var loanContractId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            loanContractId = request.params.loanContractId;
            _context3.next = 4;
            return _LoanContract2["default"].findByIdAndDelete(loanContractId);

          case 4:
            response.sendStatus(200);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("Failed to delete LoanContract: ".concat(_context3.t0));
            response.sendStatus(500);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteLoanContract(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var getAllLoanContracts =
/*#__PURE__*/
exports.getAllLoanContracts = function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(request, response) {
    var loanContracts;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _LoanContract2["default"].find();

          case 3:
            loanContracts = _context4.sent;
            response.json({
              status: 200,
              loanContracts: loanContracts
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

  return function getAllLoanContracts(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

var getLoanContract =
/*#__PURE__*/
exports.getLoanContract = function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(request, response) {
    var loanContractId, loanContract;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            loanContractId = request.params.loanContractId;
            _context5.next = 4;
            return _LoanContract2["default"].findById(loanContractId);

          case 4:
            loanContract = _context5.sent;
            response.json({
              status: 200,
              loanContract: loanContract
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

  return function getLoanContract(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();