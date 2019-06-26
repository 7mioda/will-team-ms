"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loanContractSchema = new _mongoose2["default"].Schema({
  interestRate: Number,
  client: {
    type: _mongoose2["default"].Schema.Types.ObjectId,
    ref: 'Client'
  },
  banker: {
    type: _mongoose2["default"].Schema.Types.ObjectId,
    ref: 'Banker'
  },
  loan: {
    type: _mongoose2["default"].Schema.Types.ObjectId,
    ref: 'Loan'
  },
  files: [String],
  amount: Number,
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  }
}, {
  collection: 'LoanContract'
});

loanContractSchema.methods.toJSON = function userToJSON() {
  return {
    id: this._id,
    client: this.client,
    banker: this.banker,
    loan: this.loan,
    amount: this.amount,
    files: this.files
  };
};

exports["default"] = _mongoose2["default"].model('LoanContract', loanContractSchema);