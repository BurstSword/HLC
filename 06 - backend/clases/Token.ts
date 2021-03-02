import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
export default class Token {
    private static data: any = dotenv.config();
    public static secreto: string = Token.data.parsed.SECRETO;
    public static caducidad: string = Token.data.parsed.EXPIRATION;
    constructor() {

    }

    static generaToken(payload: any): string {
        const miToken = jwt.sign({
            usuario: payload
        }, this.secreto, {
            expiresIn: this.caducidad
        });
        return miToken;
    }

    static verificaToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, Token.secreto, (err:any, decoded: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }
}