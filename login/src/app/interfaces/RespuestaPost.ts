export interface RespuestaPost {
    status: string,
    mensaje: string,
    usuario: Usuario,
    error?: any,
    token: string,
    eventos:Evento[]
}


export interface Decode {
    exp: number;
    iat: number;
    usuario: Usuario;
}

export interface Usuario {
    _id?: string,
    nombre: string,
    email: string,
    password: string,
    edad: number
}

export interface Evento{
    _id?:string,
    idUsuario?:string,
    nombre?:string,
    fecha?:Date,
    asistentes?:string[]
}