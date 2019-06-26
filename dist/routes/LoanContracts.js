"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _LoanContracts = require("../controllers/LoanContracts");

var _multer = require("../middlewares/multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MAX_FILES_COUNT = 10;

var router = _express2["default"].Router();

router.get('/', _LoanContracts.getAllLoanContracts);
router.get('/:loanContractId', _LoanContracts.getLoanContract);
router.post('/add', _multer2["default"].array('files', MAX_FILES_COUNT), _LoanContracts.addLoanContract);
router.post('/update', _LoanContracts.updateLoanContract);
router["delete"]('/delete/:loanContractId', _LoanContracts.deleteLoanContract);
exports["default"] = router;