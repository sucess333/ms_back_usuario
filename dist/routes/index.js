"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.pago"));
var ruta = (0, _express.Router)();
ruta.use("/api", _routes["default"]);
var _default = exports["default"] = ruta;