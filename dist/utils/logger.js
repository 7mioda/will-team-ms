"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = exports.log = function log(string) {
  console.log(_chalk2["default"].blue.bgRed.bold(string));
};