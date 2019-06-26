"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloudinary = require("cloudinary");

var _cloudinary2 = _interopRequireDefault(_cloudinary);

require("dotenv/config");

var _multerStorageCloudinary = require("multer-storage-cloudinary");

var _multerStorageCloudinary2 = _interopRequireDefault(_multerStorageCloudinary);

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process = process,
    _process$env = _process.env,
    api_secret = _process$env.API_SECRET,
    api_key = _process$env.API_KEY,
    cloud_name = _process$env.CLOUD_NAME;

_cloudinary2["default"].config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret
});

var storage = (0, _multerStorageCloudinary2["default"])({
  cloudinary: _cloudinary2["default"],
  folder: 'samples/ecommerce',
  filename: function filename(request, file, callback) {
    var originalname = file.originalname;
    var cloudName = "".concat(originalname, "-").concat(_shortid2["default"].generate());
    callback(request, cloudName);
  }
});
exports["default"] = (0, _multer2["default"])({
  storage: storage
});