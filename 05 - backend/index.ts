import { Server } from "./classes/server";

const server = new Server();

server.start(()=>{
console.log('Servidor iniciado en el puerto ' + server.port );
})