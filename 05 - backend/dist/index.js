"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
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
mongoose_1.default.connect('mongodb://localhost:27017/hlc2021', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log("error", err);
        throw err;
    }
    else {
        console.log('Conectado a la base de datos');
        /* const miEsquema = new Schema({nombre:String});
        const miModelo = mongoose.model('nombreModelo', miEsquema);
        miModelo.create({nombre:'pepe'}) */
    }
});
