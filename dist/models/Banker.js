"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BankerSchema = new _mongoose2["default"].Schema({
  user: {
    type: _mongoose2["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  registrationNumber: Number,
  type: {
    type: String,
    "enum": ['banker', 'director']
  },
  photo: String
}, {
  collection: 'Banker'
});

BankerSchema.methods.toJSON = function bankerToJSON() {
  return {
    id: this._id,
    user: this.user,
    registrationNumber: this.registrationNumber,
    type: this.type,
    photo: this.photo
  };
};

exports["default"] = _mongoose2["default"].model('Banker', BankerSchema);