"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarPago = exports.modificarPago = exports.listarPago = exports.eliminarPago = exports.agregarPago = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mysql = require("../config/mysql.db");
var mostrarPago = exports.mostrarPago = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return _mysql.pool.query("CALL SP_MOSTRAR_PAGO (?)", [id]);
        case 4:
          respuesta = _context.sent;
          res.json({
            "respuesta": respuesta[0]
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.json({
            "error": _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 8]]);
  }));
  return function mostrarPago(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var listarPago = exports.listarPago = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return _mysql.pool.query("CALL SP_LISTAR_PAGO ()");
        case 4:
          respuesta = _context2.sent;
          res.json({
            "respuesta": respuesta[0]
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.json({
            "error": _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return function listarPago(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var agregarPago = exports.agregarPago = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, id, pago, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, pago = _req$body.pago;
          _context3.prev = 1;
          _context3.next = 4;
          return _mysql.pool.query("CALL SP_AGREGAR_PAGO (\"".concat(id, "\" , \"").concat(pago, "\")"));
        case 4:
          respuesta = _context3.sent;
          res.json({
            "respuesta": "producto agregado correctamente"
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.json({
            "error": "producto no agregado"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return function agregarPago(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarPago = exports.modificarPago = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, id, pago, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, id = _req$body2.id, pago = _req$body2.pago;
          _context4.prev = 1;
          _context4.next = 4;
          return _mysql.pool.query("CALL SP_MODIFICAR_PAGO (\"".concat(id, "\" , \"").concat(pago, "\")"));
        case 4:
          respuesta = _context4.sent;
          res.json({
            "respuesta": "producto modificado correctamente"
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          res.json({
            "error": "producto no modificado"
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return function modificarPago(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarPago = exports.eliminarPago = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, id, pago, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, id = _req$body3.id, pago = _req$body3.pago;
          _context5.prev = 1;
          _context5.next = 4;
          return _mysql.pool.query("CALL SP_ELIMINAR_PAGO (\"".concat(id, "\" , \"").concat(pago, "\")"));
        case 4:
          respuesta = _context5.sent;
          res.json({
            "respuesta": "producto eliminado correctamente"
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          res.json({
            "error": "producto no eliminado"
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarPago(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();