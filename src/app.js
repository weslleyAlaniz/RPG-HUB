import express from "express";

const app = express();
app.use(express.json());

let personagens = [
    {   
        
        playerName: "Sayra",
        name: "Silky",
        classe: "patruleiro",
        nvl: 5,
    },
    {   
        playerName: "Vinicius",
        name: "Maco",
        classe: "Mago",
        nvl: 5,
    },
    {   
        playerName: "Alisson",
        name: "Armin",
        classe: "Monge",
        nvl: 5,
    },
    {   
        playerName: "Thiago",
        name: "Folium",
        classe: "Guerreiro",
        nvl: 5,
    },

]

function buscaPersonagemPeloNome(name) {
    return personagens.findIndex(personagem => personagem.name === name)
}
    


app.get('/', (req, res) => {
  res.status(200).send("Bem vindo a API RPG-HUB");
})

app.get("/personagens", (req, res) => {
    res.status(200).send(personagens)
})

 app.get("/personagens/:name", (req, res) => {
 res.status(200).send(personagens[(buscaPersonagemPeloNome(req.params.name))])
 })

app.post("/personagens", (req, res) => {
    personagens.push(req.body)
    res.status(201).send(personagens)
})

app.put("/personagens/:name", (req, res)=> {
    const index = buscaPersonagemPeloNome(req.params.name);
    personagens[index] = { ...personagens[index], ...req.body };
    res.status(200).send(personagens[index])
})

app.delete("/personagens/:name", (req, res) => {
    const index = buscaPersonagemPeloNome(req.params.name);
    personagens.splice(index, 1);
    res.status(200).send(personagens);
})
    

export default app;

//  {
//      "playerName": "Matheus",
//     "name": "tamandua",
//     "classe": "bardo",
//      "nvl": 3
//    }