import personagem from "../models/Personagens.js";

class PersonagemController {
    static async listarPersonagens(req, res) {
        try {
        const listaPersonagens = await personagem.find({});
        res.status(200).json(listaPersonagens);
        }  catch (erro){
            res.status(500).json(erro.message);
        }
    }

    static async listarPersonagemPorId(req, res) {
        try {
            const personagemEncontrado = await personagem.findById(req.params.id);
            res.status(200).json(personagemEncontrado);
        }  catch (erro){
            res.status(500).json(erro.message);
        }
    }

   

    static async cadastrarPersonagem (req, res) {
            try {
                const novoPersonagem = await personagem.create(req.body);

                res.status(201).json(novoPersonagem);
            } catch (erro){
                res.status(500).json(erro.message);
               
            }
        
    }

    
}



export default PersonagemController;