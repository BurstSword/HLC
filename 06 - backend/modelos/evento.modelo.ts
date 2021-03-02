import { Schema, Document } from 'mongoose';
import mongoose from 'mongoose';

interface IEvent extends Document {
    idUsuario: string;
    nombre: string;
    fecha: Date;
    asistentes: string[];
   
};



const eventSchema = new Schema ({
    idUsuario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
    nombre: String,
    fecha: Date,
    asistentes: Array,
}, {
    timestamps: true,
});

export const Evento = mongoose.model<IEvent>('Evento', eventSchema);