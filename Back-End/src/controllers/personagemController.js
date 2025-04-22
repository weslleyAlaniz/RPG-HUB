import personagem from "../models/Personagens.js";

class PersonagemController {
    static async listarPersonagens(req, res) {
        try {
        const listaPersonagens = await personagem.find({});
        res.status(200).json(listaPersonagens);
        }  catch (erro){
            res.status(500).json({ mensagem: "Erro ao listar personagens", erro: erro.message });
        }
    }

    static async listarPersonagemPorParametro(req, res) {
        try {
            const { id, nomeDeJogador, nome, raca, classe, nvl } = req.query; 
            let filtro = {};
    
            if (id) filtro._id = id; 
            if (nomeDeJogador) filtro.nomeDeJogador = nomeDeJogador; 
            if (nome) filtro.nome = nome; 
            if (raca) filtro.raca = raca; 
            if (classe) filtro.classe = classe; 
            if (nvl) filtro.nvl = Number(nvl); 

            if (Object.keys(filtro).length === 0) {
                return res.status(400).json({ mensagem: "Nenhum parâmetro válido foi fornecido para a consulta." });
            }
    
            const personagensEncontrados = await personagem.find(filtro);
    
            if (personagensEncontrados.length === 0) {
                return res.status(404).json({ mensagem: "Nenhum personagem encontrado" });
            }
    
            res.status(200).json(personagensEncontrados);
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao buscar personagem", erro: erro.message });
        }
    }
    
    
    static async cadastrarPersonagem (req, res) {
            try {
                const novoPersonagem = await personagem.create(req.body);
                
                res.status(201).json(novoPersonagem);
            } catch (erro){
                res.status(500).json({ mensagem: "Erro ao cadastrar personagem", erro: erro.message });
                
            }
            
        }
        
    static async deletarPersonagem (req, res) {
        try {
            await personagem.findByIdAndDelete(req.params.id);
            
            res.status(204).send({mensagem:"Personagens deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao deletar personagem", erro: erro.message });
        }
    }    

    static async atualizarPersonagem (req, res) {
        try {

             await personagem.findByIdAndUpdate(req.params.id, req.body);

            res.status(200).json({ mensagem:"Personagens atualizado com sucesso", })
        } catch (erro) {
            res.status(500).json({ mensagem: "Erro ao atualizar personagem", erro: erro.message })
        }
    }
        
    }
    
    
    
    export default PersonagemController;

