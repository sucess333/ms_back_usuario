"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.pago");
var rutaPago = (0, _express.Router)();
rutaPago.get("/pagos/:id", _controllers.mostrarPago);
rutaPago.get("/pagos", _controllers.listarPago);
rutaPago.post("/pagos", _controllers.agregarPago);
rutaPago.put("/pagos", _controllers.modificarPago);
rutaPago["delete"]("/pagos", _controllers.eliminarPago);
var _default = exports["default"] = rutaPago;