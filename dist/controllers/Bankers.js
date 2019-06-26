"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanker = exports.getAllBankers = exports.deleteBanker = exports.updateBanker = exports.addBanker = undefined;

var _Banker = require("../models/Banker");

var _Banker2 = _interopRequireDefault(_Banker);

var _User = require("../models/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addBanker =
/*#__PURE__*/
exports.addBanker = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var _request$body, email, password, registrationNumber, type, photo, user, _ref2, _id, banker;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _request$body = request.body, email = _request$body.email, password = _request$body.password, registrationNumber = _request$body.registrationNumber, type = _request$body.type, photo = request.file.url;
            user = (0, _User2["default"])({
              email: email,
              password: password
            });
            _context.next = 5;
            return user.save();

          case 5:
            _ref2 = _context.sent;
            _id = _ref2._id;
            banker = (0, _Banker2["default"])({
              user: _id,
              registrationNumber: registrationNumber,
              type: type,
              photo: photo
            });
            _context.next = 10;
            return banker.save();

          case 10:
            response.json({
              status: 200,
              banker: banker
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log("Failed to insert Banker: ".concat(_context.t0));
            response.sendStatus(500);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function addBanker(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateBanker =
/*#__PURE__*/
exports.updateBanker = function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(request, response) {
    var body, banker;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = request.body;
            _context2.next = 4;
            return _Banker2["default"].findByIdAndUpdate(body.id, body, {
              "new": true
            }).lean();

          case 4:
            banker = _context2.sent;
            response.json({
              banker: banker
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log("Failed to update Banker: ".concat(_context2.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function updateBanker(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteBanker =
/*#__PURE__*/
exports.deleteBanker = function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(request, response) {
    var bankerId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            bankerId = request.params.bankerId;
            _context3.next = 4;
            return _Banker2["default"].findByIdAndDelete(bankerId);

          case 4:
            response.sendStatus(200);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("Failed to delete banker: ".concat(_context3.t0));
            response.sendStatus(500);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteBanker(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var getAllBankers =
/*#__PURE__*/
exports.getAllBankers = function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(request, response) {
    var bankers;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Banker2["default"].find();

          case 3:
            bankers = _context4.sent;
            response.json({
              status: 200,
              bankers: bankers
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

  return function getAllBankers(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

var getBanker =
/*#__PURE__*/
exports.getBanker = function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(request, response) {
    var bankerId, banker;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            bankerId = request.params.bankerId;
            _context5.next = 4;
            return _Banker2["default"].findById(bankerId);

          case 4:
            banker = _context5.sent;
            response.json({
              status: 200,
              banker: banker
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

  return function getBanker(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();