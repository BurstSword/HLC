import { Router } from "express"
import usuarioController from "../controladores/usuario.controlador"

const usuarioRutas = Router();

usuarioRutas.post('/registro', usuarioController.prototype.registro);
usuarioRutas.post('/login', usuarioController.prototype.login);

export default usuarioRutas;