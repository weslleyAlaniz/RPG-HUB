import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    playerName: {type: String, require: true},
    name: {type: String, require: true},
    race: {type: String, require: true},
    class: {type: String, require: true},
    nvl: {type: Number, require: true}
}, {versionKey: false}) 

const personagem = mongoose.model("personagens", personagemSchema); 

export default personagem;