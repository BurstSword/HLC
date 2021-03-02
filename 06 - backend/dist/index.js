"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./clases/server");
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var usuario_ruta_1 = __importDefault(require("./rutas/usuario.ruta"));
var mongoose_1 = __importDefault(require("mongoose"));
var evento_ruta_1 = require("./rutas/evento.ruta");
var server = new server_1.Server();
server.app.use(body_parser_1.default.urlencoded({ limit: '5mb', extended: true }));
server.app.use(body_parser_1.default.json({ limit: '5mb' }));
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/usuario', usuario_ruta_1.default);
server.app.use('/evento', evento_ruta_1.rutaEventos);
server.start(function () {
    console.log("Servidor iniciado en el puerto " + server.port);
});
mongoose_1.default.connect('mongodb://localhost:27017/hlc2021', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log("error", err);
        throw err;
    }
    else {
        console.log('Conectado a la base de datos');
    }
});
