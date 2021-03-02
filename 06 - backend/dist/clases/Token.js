"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.generaToken = function (payload) {
        var miToken = jsonwebtoken_1.default.sign({
            usuario: payload
        }, this.secreto, {
            expiresIn: this.caducidad
        });
        return miToken;
    };
    Token.verificaToken = function (token) {
        return new Promise(function (resolve, reject) {
            jsonwebtoken_1.default.verify(token, Token.secreto, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    };
    Token.data = dotenv_1.default.config();
    Token.secreto = Token.data.parsed.SECRETO;
    Token.caducidad = Token.data.parsed.EXPIRATION;
    return Token;
}());
exports.default = Token;
