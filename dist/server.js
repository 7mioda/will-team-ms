"use strict";

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _logger = require("./utils/logger");

require("babel-polyfill");

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var _database = require("./models/database");

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv2["default"].config();

(0, _database2["default"])().then(function () {
  (0, _logger.log)('Database is connected');
});
var PORT = process.env.PORT || '3000';

var server = _http2["default"].createServer(_app2["default"]);

server.listen(PORT);
server.on('listening', function () {
  (0, _logger.log)("Server listening on PORT ".concat(PORT));
});
server.on('error', function (error) {
  (0, _logger.log)("Error ".concat(error));
});