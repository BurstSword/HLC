import { Request, Response } from "express"
import Token from "../clases/Token";
import { Usuario } from "../modelos/usuario.modelo";

class usuarioController {

    registro(req: Request, res: Response) {
        let params = req.body;
        const usuarioNuevo = new Usuario();
        usuarioNuevo.nombre = params.nombre;
        usuarioNuevo.email = params.email;
        usuarioNuevo.password = params.password;
        usuarioNuevo.edad = params.edad;
        Usuario.create(usuarioNuevo).then(usuarioDB => {
            if (!usuarioDB) {
                return res.status(500).send({
                    status: "error",
                    mensaje: "Error al crear el usuario"
                })
            }
            res.status(200).send({
                status: "ok",
                mensaje: "Se ha creado el usuario",
                usuario: usuarioDB
            })
        }).catch(err => {
            res.status(500).send({
                status: 'error',
                error: err
            })
        });

    }

    login(req: Request, res: Response) {
        const params = req.body;
        Usuario.findOne({ nombre: params.nombre, password: params.pwd }).then((usuarioDB) => {
            if (!usuarioDB) {
                return res.status(500).send({
                    status: 'error',
                    mensaje: "Usuario y/o contraseña incorrectas"
                })
            }
            const usuarioQueDevuelvo = new Usuario();
            usuarioQueDevuelvo.nombre = usuarioDB.nombre;
            usuarioQueDevuelvo._id = usuarioDB._id;
            res.status(200).send({
                status: 'ok',
                mensaje: "Loggeado correctamente",
                usuario: usuarioQueDevuelvo,
                token: Token.generaToken(usuarioQueDevuelvo)
            })
        }).catch(err => {
            res.status(500).send({
                status: 'error',
                mensaje: "Error en la BBDD",
                error: err
            })
        })
    }
}

export default usuarioController