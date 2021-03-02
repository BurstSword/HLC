import { NextFunction } from "express";
import Token from "../clases/Token";

export const autenticacion = (req: any, res: any, next: NextFunction) => {
    let userToken: string = req.get("Authorization") || "";
    if (userToken != "") {
        userToken = userToken.split("Bearer ")[1];
    }

    Token.verificaToken(userToken).then((decoded: any) => {
        req.body.usuario = decoded.usuario;
        next();
    }).catch(err => {
        if(err.message === 'invalid token') {
            res.status(401).json({
                status: 401,
                message: 'Unauthorized: Invalid token'
            });

        } else {
            res.status(401).json({
                status: 401,
                message: 'Session has timed out'
            });
        };
    });
}