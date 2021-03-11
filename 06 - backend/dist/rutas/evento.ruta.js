"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaEventos = void 0;
var express_1 = require("express");
var evento_controlador_1 = require("../controladores/evento.controlador");
var autenticacion_1 = require("../middlewares/autenticacion");
exports.rutaEventos = express_1.Router();
exports.rutaEventos.post('/crear', autenticacion_1.autenticacion, evento_controlador_1.eventoController.prototype.crearEvento);
exports.rutaEventos.get('/traer', autenticacion_1.autenticacion, evento_controlador_1.eventoController.prototype.traerEventos);
exports.rutaEventos.post('/actualizar', autenticacion_1.autenticacion, evento_controlador_1.eventoController.prototype.actualizarEvento);
exports.rutaEventos.post('/eliminar', autenticacion_1.autenticacion, evento_controlador_1.eventoController.prototype.eliminarEvento);
