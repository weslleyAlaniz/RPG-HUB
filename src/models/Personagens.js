import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    nomeDeJogador: {type: String, require: true},
    nome: {type: String, require: true},
    raca: {type: String, require: true},
    classe: {type: String, require: true},
    nvl: {type: Number, require: true}
}, {versionKey: false}) 

const personagem = mongoose.model("personagens", personagemSchema); 

export default personagem;

