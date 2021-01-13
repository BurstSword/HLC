import { Server } from "./classes/server";

console.log("Vaya leyenda");

const server = new Server();

server.start(()=>{
console.log('Servidor iniciado en el puerto ' + server.port );
})