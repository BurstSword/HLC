import { Server } from "./classes/server";
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from "./routes/user.routes";
import mongoose from 'mongoose'

const server = new Server();


//bodyParser
server.app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
server.app.use(bodyParser.json({ limit: '5mb' }));
//configuramos el CORS
server.app.use(cors({
    origin: true,
    credentials: true
}));
server.app.use('/user', userRoutes);

server.start(() => {
    console.log('Server initialized on port ' + server.port);
})

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