import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    nomeDeJogador: {type: String, require: true},
    nome: {type: String, require: true},
    raca: {type: String, require: true},
    classe: {type: String, require: true}, //criar model para classes pois dados de vida e proficiencia variam entre classes
    antecedente: {type: String, require: true},
    nvl: {type: Number, require: true},
    exp: {type: Number, require: true},
    atributos: {
        forca: {type: Number, require: true},
        destreza: {type: Number, require: true},
        constituicao: {type: Number, require: true},
        inteligencia: {type: Number, require: true},
        sabedoria: {type: Number, require: true},
        carisma: {type: Number, require: true}
    },
    Pericias: {
        acrobacia: {type: Boolean},
        arcanismo: {type: Boolean},
        atletismo: {type: Boolean},
        atuação: {type: Boolean},
        blefar: {type: Boolean},
        furtividade: {type: Boolean},
        historia: {type: Boolean},
        intimidacao: {type: Boolean},
        intuição: {type: Boolean},
        investigação: {type: Boolean},
        lidarComAnimais: {type: Boolean},
        medicina: {type: Boolean},
        natureza: {type: Boolean},
        percepção: {type: Boolean},
        persuasao: {type: Boolean},
        performance: {type: Boolean},
        prestigitação: {type: Boolean},
        religion: {type: Boolean},
        sobrevivencia: {type: Boolean},
    },
    Vitalidade: {
        max: {type: Number, require: true},
        atual: {type: Number, require: true},
        dadosDeVida: {type: Number, require: true},
        classeDeArmadura: {type: Number, require: true}
    },
    inventario: [{type: String}],
    habilidades: {
        passivas: [{type: String}],
        ativas: [{type: String}]
    },
    magias: {
        magiasConhecidas: [{type: String}],
        magiasPreparadas: [{type: String}],
        magiasPorDia: [{type: Number}],
        magiasPorNivel: [{type: Number}],
        magiasDeAtaque: [{type: String}],
        magiasDeSalvacao: [{type: String}]
    },



    
    
}, {versionKey: false}) 

const personagem = mongoose.model("personagens", personagemSchema); 

export default personagem;

