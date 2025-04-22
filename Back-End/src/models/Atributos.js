import mongoose from "mongoose";

const atributosSchema = new mongoose.Schema({
    forca: { type: Number, require: true },
    destreza: { type: Number, require: true },
    constituicao: { type: Number, require: true },
    inteligencia: { type: Number, require: true },
    sabedoria: { type: Number, require: true },
    carisma: { type: Number, require: true }
}, { versionKey: false });