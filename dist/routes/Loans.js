"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _loans = require("../controllers/loans");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express2["default"].Router();

router.get('/', _loans.getAllLoans);
router.get('/:loanId', _loans.getLoan);
router.post('/add', _loans.addLoan);
router.post('/update', _loans.updateLoan);
router["delete"]('/delete/:loanId', _loans.deleteLoan);
exports["default"] = router;