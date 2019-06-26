"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _users = require("../controllers/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express2["default"].Router();

router.post('/register', _users.register);
router.post('/login', _users.logIn);
router.post('/refresh', _users.getRefreshToken);
exports["default"] = router;