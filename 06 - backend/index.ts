import { Server } from "./clases/server";
import bodyParser from 'body-parser'
import cors from 'cors'
import usuarioRutas from "./rutas/usuario.ruta";
import mongoose from 'mongoose';
import { rutaEventos } from "./rutas/evento.ruta";
const server = new Server();



server.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
server.app.use(bodyParser.json({ limit: '5mb' }));



server.app.use(cors({
    origin: true,
    credentials: true
}))

server.app.use('/usuario', usuarioRutas);

server.app.use('/evento', rutaEventos);

server.start(() => {
    console.log("Servidor iniciado en el puerto " + server.port);
});

mongoose.connect('mongodb://localhost:27017/hlc2021',
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err: any) => {
        if (err) {
            console.log("error", err);
            throw err;
        }
        else {
            console.log('Conectado a la base de datos');

        }
    });