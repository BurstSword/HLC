"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRoutes = express_1.Router();
userRoutes.get('/getGreeting', user_controller_1.default.prototype.getGreeting);
userRoutes.post('/testPost', user_controller_1.default.prototype.testPost);
exports.default = userRoutes;
