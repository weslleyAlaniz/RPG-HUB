import express from "express";
import connectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await connectaNaDataBase();

conexao.on("error", (err) => {
    console.error("Erro na conexão com a data base", err);
});

conexao.once("open", () => {
    console.log("Conexãocom o banco feita com sucesso");
    
})

const app = express();
routes(app);


export default app;

