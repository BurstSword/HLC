"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
// Creamos una variable que guarde una ruta( tipo express)
const userRoutes = express_1.Router();
// Vamos a ir añadiendo esto a /usuario/getSaludo
// Vamos a llamar a la función usuarioController
//prototype es para saber que es esa función, para poder acceder
userRoutes.get('/getGreetings', user_controller_1.default.prototype.getGreeting);
userRoutes.post('/testPost', user_controller_1.default.prototype.testPost);
// si lo exporta me deja usarlo en otros lugares del servidor,
// default que es lo unico que vamos a definir e slo unico que quiero expotar
exports.default = userRoutes;
