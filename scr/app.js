import express from "express";

const app = express();
app.use(express.json());

let personagens = [
    {   
        id: 1,
        playerName: "Sayra",
        name: "Silky",
        classe: "patruleiro",
        nvl: 5,
    },
    {   id: 2,
        playerName: "Vinicius",
        name: "Maco",
        classe: "Mago",
        nvl: 5,
    },
    {   id: 3,
        playerName: "Alisson",
        name: "Armin",
        classe: "Monge",
        nvl: 5,
    },
    {   id: 4,
        playerName: "Thiago",
        name: "Folium",
        classe: "Guerreiro",
        nvl: 5,
    },

]

function buscaPersonagemPeloNome(playerName) {
    return personagens.findIndex(personagem => personagem.playerName === playerName)
}
    


app.get('/', (req, res) => {
  res.status(200).send("Bem vindo a API RPG-HUB");
})

app.get("/personagens", (req, res) => {
    res.status(200).send(personagens)
})

 app.get("/personagens/:playerName", (req, res) => {
 res.status(200).send(personagens[(buscaPersonagemPeloNome(req.params.playerName))])
 })

app.post("/personagens", (req, res) => {
    personagens.push(req.body)
    res.status(201).send(personagens)
})

app.put("/personagens/:playerName", (req, res)=> {
    const player = buscaPersonagemPeloNome(req.params.playerName);
    personagens[player].name = req.body.name;
    res.status(200).send(personagens[player])
})

export default app;

// {
//     "playerName": "Matheus",
//     "name": "tamandua",
//     "classe": "bardo",
//     "nvl": 3
//   }