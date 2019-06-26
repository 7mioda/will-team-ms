"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Bankers = require("../controllers/Bankers");

var _multer = require("../middlewares/multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express2["default"].Router();

router.get('/', _Bankers.getAllBankers);
router.get('/:bankerId', _Bankers.getBanker);
router.post('/add', _multer2["default"].single('photo'), _Bankers.addBanker);
router.post('/update', _multer2["default"].single('photo'), _Bankers.updateBanker);
router["delete"]('/delete/:bankerId', _Bankers.deleteBanker);
exports["default"] = router;