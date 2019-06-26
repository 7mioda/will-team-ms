"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = exports.getAllClients = exports.deleteClient = exports.updateClient = exports.addClient = undefined;

var _Client2 = require("../models/Client");

var _Client3 = _interopRequireDefault(_Client2);

var _User = require("../models/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addClient =
/*#__PURE__*/
exports.addClient = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var _request$body, email, password, cin, firstName, lastName, birthDate, photo, user, _ref2, _id, _Client;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _request$body = request.body, email = _request$body.email, password = _request$body.password, cin = _request$body.cin, firstName = _request$body.firstName, lastName = _request$body.lastName, birthDate = _request$body.birthDate, photo = request.file.url;
            user = (0, _User2["default"])({
              email: email,
              password: password
            });
            _context.next = 5;
            return user.save();

          case 5:
            _ref2 = _context.sent;
            _id = _ref2._id;
            _Client = _Client({
              user: _id,
              cin: cin,
              lastName: lastName,
              firstName: firstName,
              birthDate: birthDate,
              photo: photo
            });
            _context.next = 10;
            return _Client.save();

          case 10:
            response.json({
              status: 200,
              Client: _Client
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log("Failed to insert Client: ".concat(_context.t0));
            response.sendStatus(500);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function addClient(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var updateClient =
/*#__PURE__*/
exports.updateClient = function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(request, response) {
    var body, client;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = request.body;
            _context2.next = 4;
            return _Client3["default"].findByIdAndUpdate(body.id, body, {
              "new": true
            }).lean();

          case 4:
            client = _context2.sent;
            response.json({
              client: client
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log("Failed to update Client: ".concat(_context2.t0));
            response.sendStatus(500);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function updateClient(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteClient =
/*#__PURE__*/
exports.deleteClient = function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(request, response) {
    var clientId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            clientId = request.params.clientId;
            _context3.next = 4;
            return _Client3["default"].findByIdAndDelete(clientId);

          case 4:
            response.sendStatus(200);
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log("Failed to delete Client: ".concat(_context3.t0));
            response.sendStatus(500);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteClient(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var getAllClients =
/*#__PURE__*/
exports.getAllClients = function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(request, response) {
    var clients;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Client3["default"].find();

          case 3:
            clients = _context4.sent;
            response.json({
              status: 200,
              clients: clients
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

  return function getAllClients(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

var getClient =
/*#__PURE__*/
exports.getClient = function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(request, response) {
    var ClientId, client;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            ClientId = request.params.ClientId;
            _context5.next = 4;
            return _Client3["default"].findById(ClientId);

          case 4:
            client = _context5.sent;
            response.json({
              status: 200,
              client: client
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

  return function getClient(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();