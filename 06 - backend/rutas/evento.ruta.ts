import { Router } from "express";
import { eventoController } from "../controladores/evento.controlador";
import { autenticacion } from "../middlewares/autenticacion";

export const rutaEventos = Router();

rutaEventos.post('/crear', autenticacion, eventoController.prototype.crearEvento);
rutaEventos.get('/traer', autenticacion, eventoController.prototype.traerEventos);
rutaEventos.post('/actualizar', autenticacion, eventoController.prototype.actualizarEvento);