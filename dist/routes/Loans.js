"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Loans = require("../controllers/Loans");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express2["default"].Router();

router.get('/', _Loans.getAllLoans);
router.get('/:loanId', _Loans.getLoan);
router.post('/add', _Loans.addLoan);
router.post('/update', _Loans.updateLoan);
router["delete"]('/delete/:loanId', _Loans.deleteLoan);
exports["default"] = router;