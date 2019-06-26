"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ClientSchema = new _mongoose2["default"].Schema({
  user: {
    type: _mongoose2["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  cin: Number,
  firstName: String,
  lastName: String,
  birthDate: Date,
  photo: String
}, {
  collection: 'Client'
});

ClientSchema.methods.toJSON = function clientToJSON() {
  return {
    id: this._id,
    user: this.user,
    cin: this.cin,
    loan: this.loan,
    amount: this.amount,
    files: this.files
  };
};

exports["default"] = _mongoose2["default"].model('Client', ClientSchema);