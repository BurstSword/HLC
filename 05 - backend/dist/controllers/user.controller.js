
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//nos creamos una clase para no tenerlo en el archivo usuario.rutas.ts
// en ese solo llamariamos a esta función
class userController {
    registro(req, res) {
        const params = req.body;
    }
    getGreeting(req, res) {
        // aquí haría el proceso para que el usuario pueda hacer lo que quiera
        // solo redirige
        const name = req.query.name || 'desconocido';
        res.send({
            status: 'ok',
            name: 'Hello ' + name,
            message: 'hello'
        });
    }
    testPost(req, res) {
        console.log('el body', req.body);
        let params = req.body;
        if (!params.user) {
            res.status(200).send({
                status: 'ok',
                message: 'The user is mandatory'
            });
        }
        res.send({
            status: 'ok',
        });
    }
}
exports.default = userController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
//nos creamos una clase para no tenerlo en el archivo usuario.rutas.ts
// en ese solo llamariamos a esta función
class userController {
    getGreeting(req, res) {
        // aquí haría el proceso para que el usuario pueda hacer lo que quiera
        // solo redirige
        const name = req.query.name || 'desconocido';
        res.send({
            status: 'ok',
            name: 'Hello ' + name,
            message: 'hello'
        });
    }
    register(req, res) {
        let params = req.body;
        const usuarioNuevo = new user_model_1.User();
        usuarioNuevo.nombreUsuario = params.nombre;
        usuarioNuevo.email = params.email;
        usuarioNuevo.pwd = params.pwd;
        usuarioNuevo.edad = params.edad;
        user_model_1.User.create(usuarioNuevo).then(usuarioDB => {
            res.status(200).send({
                status: 'ok',
                mensaje: 'Se ha creado el usuario ' + usuarioDB.nombreUsuario,
                usuario: usuarioDB
            });
        });
    }
    testPost(req, res) {
        console.log('el body', req.body);
        let params = req.body;
        if (!params.user) {
            res.status(200).send({
                status: 'ok',
                message: 'The user is mandatory'
            });
        }
        res.send({
            status: 'ok',
        });
    }
}
exports.default = userController;

