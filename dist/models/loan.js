"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loanSchema = new _mongoose2["default"].Schema({
  name: String,
  description: String,
  interestRate: Number,
  loanPapers: String,
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
}, {
  collection: 'Loan'
});

loanSchema.methods.toJSON = function userToJSON() {
  return {
    id: this._id,
    name: this.name,
    description: this.description,
    interestRate: this.interestRate,
    loanPapers: this.loanPapers
  };
};

exports["default"] = _mongoose2["default"].model('Loan', loanSchema);