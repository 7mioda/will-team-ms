"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _users = require("./routes/users");

var _users2 = _interopRequireDefault(_users);

var _loans = require("./routes/loans");

var _loans2 = _interopRequireDefault(_loans);

var _bankers = require("./routes/bankers");

var _bankers2 = _interopRequireDefault(_bankers);

var _Clients = require("./routes/Clients");

var _Clients2 = _interopRequireDefault(_Clients);

var _loanContracts = require("./routes/loanContracts");

var _loanContracts2 = _interopRequireDefault(_loanContracts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = new _express2["default"](); // Managing Cors

app.use((0, _cors2["default"])()); // Setting up the Logger

app.use((0, _morgan2["default"])('dev')); // SettingUp BodyParser MiddleWare: Parse RequestBody

app.use(_bodyParser2["default"].json());
app.use(_bodyParser2["default"].urlencoded({
  extended: true
})); // Setting Routes

app.use('/api/users', _users2["default"]);
app.use('/api/loans', _loans2["default"]);
app.use('/api/bankers', _bankers2["default"]);
app.use('/api/clients', _Clients2["default"]);
app.use('/api/loan-contracts', _loanContracts2["default"]);
exports["default"] = app;