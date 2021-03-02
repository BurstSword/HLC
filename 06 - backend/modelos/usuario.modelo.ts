import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'
interface Usuario extends Document {
    nombre: string,
    email: string,
    password: string,
    edad: number
}
const usuarioSchema = new Schema({
    nombre: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String},
    edad: { type: Number, }
},
    {
        timestamps: true
    })

export const Usuario = mongoose.model<Usuario>('Usuario', usuarioSchema);

