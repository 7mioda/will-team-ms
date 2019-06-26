"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose2["default"].Schema({
  email: String,
  password: String,
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
}, {
  collection: 'User'
});

userSchema.methods.toJSON = function userToJSON() {
  return {
    id: this._id,
    email: this.email,
    password: this.password
  };
};

var model = null;

if (!_mongoose2["default"].models['User']) {
  model = _mongoose2["default"].model('User', userSchema);
} else {
  model = _mongoose2["default"].model('User');
}

exports["default"] = model;