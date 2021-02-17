import { Schema } from "mongoose";

const usuario = new Schema({
    nombre:{type:String,unique:true},
    email:{type:String,unique:true},
    pwd:{type:String,unique:true},
    edad:{type:Number},
})

interface IUsuario extends Document{
    nombre:string,
    email:string,
    pwd:string,
    edad:number
}


