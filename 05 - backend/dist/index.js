"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const server = new server_1.Server();
//bodyParser
server.app.use(body_parser_1.default.urlencoded({ limit: '5mb', extended: true }));
server.app.use(body_parser_1.default.json({ limit: '5mb' }));
//configuramos el CORS
server.app.use(cors_1.default({
    origin: true,
    credentials: true
}));
server.app.use('/user', user_routes_1.default);
server.start(() => {
    console.log('Server initialized on port ' + server.port);
});
