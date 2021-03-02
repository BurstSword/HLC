import { Request, Response } from "express";
import { Evento } from "../modelos/evento.modelo";


export class eventoController {

    traerEventos(req: Request, resp: Response) {
        Evento.find().then(eventDB => {
            if (!eventDB) {
                return resp.status(200).send({
                    status: 400,
                    mensaje: 'No hay eventos',
                });
            };
            resp.status(200).send({
                status: "ok",
                mensaje: 'Eventos traídos con éxito',
                eventos: eventDB,
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        });
    };

    crearEvento(req: Request, resp: Response) {
        let params = req.body;

        const event = new Evento();
        event.idUsuario = params.usuario._id;
        event.nombre = params.nombre;
        event.fecha = params.fecha;
        event.asistentes = [params.usuario.nombre];
        

        Evento.create(event).then(() => {
            resp.status(200).send({
                status: "ok",
                mensaje: 'Evento creado'
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        });
    };

    async actualizarEvento(req: Request, resp: Response) {
        let params = req.body;
        Evento.findOne({_id: params._id}).then(eventDB => {
            if (!eventDB) {
                return resp.status(200).send({
                    status: "error",
                    message: 'No se encuentra el evento',
                }); 
            };
            if(eventDB.nombre !== params.nombre) {
                eventDB.nombre = params.nombre
            }
            if(eventDB.fecha !== params.fecha) {
                eventDB.fecha = params.fecha
            }

            if(eventDB.asistentes.length !== params.asistentes.length) {
                eventDB.asistentes = params.asistentes 
            }
            
            eventDB.save().then( () => {
                resp.status(200).send({
                    status: "ok",
                    mensaje: 'Evento actualizado'
                });
            }).catch(err => {
                resp.status(500).send({
                    status: "error",
                    mensaje: err
                });
            });
        }).catch(err => {
            resp.status(500).send({
                status: "error",
                mensaje: err
            });
        })
    }
};