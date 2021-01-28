import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'
interface IUser extends Document{
    nombreUsuario:string,
    email:string,
    pwd:string,
    edad:number
}
const userSchema = new Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    pwd: { type: String, unique: true },
    age: { type: Number, }
},
    {
        timestamps: true
    })

export const User = mongoose.model<IUser>('User',userSchema);


