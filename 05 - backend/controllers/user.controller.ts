import { Request, Response } from "express";
import { User } from "../models/user.model";
//nos creamos una clase para no tenerlo en el archivo usuario.rutas.ts
// en ese solo llamariamos a esta función
class userController {
    getGreeting(req: Request, res: Response) {
        // aquí haría el proceso para que el usuario pueda hacer lo que quiera
        // solo redirige
        const name = req.query.name || 'desconocido';
        res.send({
            status: 'ok',
            name: 'Hello ' + name,
            message: 'hello'
        })
    }

    register(req: Request, res: Response) {
        let params = req.body;
        const usuarioNuevo = new User();
        usuarioNuevo.nombreUsuario = params.nombre;
        usuarioNuevo.email = params.email;
        usuarioNuevo.pwd = params.pwd;
        usuarioNuevo.edad = params.edad;
        User.create(usuarioNuevo).then(usuarioDB => {
            res.status(200).send({
                status: 'ok',
                mensaje: 'Se ha creado el usuario ' + usuarioDB.nombreUsuario,
                usuario: usuarioDB
            })
        });

    }


    testPost(req: Request, res: Response) {
        console.log('el body', req.body)
        let params = req.body;
        if (!params.user) {
            res.status(200).send({
                status: 'ok',
                message: 'The user is mandatory'
            })
        }
        res.send({
            status: 'ok',
        })

    }
    //hay que exportarla para que se vea en otros sitios

}
export default userController