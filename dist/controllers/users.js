"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRefreshToken = exports.logIn = exports.register = undefined;

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var register =
/*#__PURE__*/
exports.register = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(request, response) {
    var _request$body, email, password, checkUser, hashedPassword, newUser, user, token, refreshToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _request$body = request.body, email = _request$body.email, password = _request$body.password;
            _context.next = 4;
            return _user2["default"].findOne({
              email: email
            });

          case 4:
            checkUser = _context.sent;

            if (!(checkUser === null)) {
              _context.next = 18;
              break;
            }

            _context.next = 8;
            return _bcryptjs2["default"].hash(password, 10);

          case 8:
            hashedPassword = _context.sent;
            newUser = new _user2["default"]({
              email: email,
              password: hashedPassword
            });
            _context.next = 12;
            return newUser.save();

          case 12:
            user = _context.sent;
            token = _jsonwebtoken2["default"].sign({
              user: user.id
            }, 'app-super-secret', {
              expiresIn: 1 // 1s

            });
            refreshToken = _jsonwebtoken2["default"].sign({
              user: user.id
            }, "app-super-secret".concat(user.password), {
              expiresIn: 604800 // une semaine

            });
            response.json({
              user: user,
              token: "JWT ".concat(token),
              refreshToken: refreshToken
            });
            _context.next = 19;
            break;

          case 18:
            response.sendStatus(422);

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            console.log("Failed to insert new user: ".concat(_context.t0));
            response.sendStatus(500);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var logIn =
/*#__PURE__*/
exports.logIn = function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(request, response) {
    var _request$body2, email, password, user, token, refreshToken;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _request$body2 = request.body, email = _request$body2.email, password = _request$body2.password;
            _context2.next = 4;
            return _user2["default"].findOne({
              email: email
            });

          case 4:
            user = _context2.sent;
            _context2.t0 = user != null;

            if (!_context2.t0) {
              _context2.next = 10;
              break;
            }

            _context2.next = 9;
            return _bcryptjs2["default"].compare(password, user.password);

          case 9:
            _context2.t0 = _context2.sent;

          case 10:
            if (!_context2.t0) {
              _context2.next = 16;
              break;
            }

            token = _jsonwebtoken2["default"].sign({
              user: user.id
            }, 'app-super-secret', {
              expiresIn: 1 // 1s

            });
            refreshToken = _jsonwebtoken2["default"].sign({
              user: user.id
            }, "app-super-secret".concat(user.password), {
              expiresIn: 604800 // une semaine

            });
            response.json({
              status: 200,
              success: true,
              token: "JWT ".concat(token),
              refreshToken: refreshToken
            });
            _context2.next = 17;
            break;

          case 16:
            response.sendStatus(401);

          case 17:
            _context2.next = 23;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2["catch"](0);
            console.log("Failed to login: ".concat(_context2.t1));
            response.sendStatus(500);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 19]]);
  }));

  return function logIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var getRefreshToken =
/*#__PURE__*/
exports.getRefreshToken = function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(request, response) {
    var token, refreshToken, _jwt$decode, id, _ref4, password, refreshSecret, refreshedToken, newRefreshToken;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = request.headers.authorization;
            refreshToken = request.body.refreshToken;
            _jwt$decode = _jsonwebtoken2["default"].decode(token.split(' ')[1], 'app-super-secret'), id = _jwt$decode.user;
            _context3.next = 6;
            return _user2["default"].findById(id);

          case 6:
            _ref4 = _context3.sent;
            password = _ref4.password;
            refreshSecret = "app-super-secret".concat(password);

            if (_jsonwebtoken2["default"].verify(refreshToken, refreshSecret)) {
              refreshedToken = _jsonwebtoken2["default"].sign({
                user: id
              }, 'app-super-secret', {
                expiresIn: 900 // 15 min

              });
              newRefreshToken = _jsonwebtoken2["default"].sign({
                user: id
              }, "app-super-secret".concat(password), {
                expiresIn: 604800 // une semaine

              });
              response.json({
                status: 200,
                success: true,
                token: "JWT ".concat(refreshedToken),
                refreshToken: newRefreshToken
              });
            }

            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log("Failed to refresh token: ".concat(_context3.t0));
            response.sendStatus(500);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getRefreshToken(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();