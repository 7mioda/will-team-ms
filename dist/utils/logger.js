"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _logUpdate = require("log-update");

var _logUpdate2 = _interopRequireDefault(_logUpdate);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = exports.log = function log(string) {
  (0, _logUpdate2["default"])(_chalk2["default"].blue.bgRed.bold(string));
};