"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuario = new mongoose_1.Schema({
    nombre: { type: String, unique: true },
    email: { type: String, unique: true },
    pwd: { type: String, unique: true },
    edad: { type: Number },
});
