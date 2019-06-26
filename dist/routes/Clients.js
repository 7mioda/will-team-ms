"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Clients = require("../controllers/Clients");

var _multer = require("../middlewares/multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express2["default"].Router();

router.get('/', _Clients.getAllClients);
router.get('/:ClientId', _Clients.getClient);
router.post('/add', _Clients.addClient);
router.post('/update', _multer2["default"].single('photo'), _Clients.updateClient);
router["delete"]('/delete/:clientId', _Clients.deleteClient);
exports["default"] = router;