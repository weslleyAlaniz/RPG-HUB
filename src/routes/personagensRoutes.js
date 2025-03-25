import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const routes = express.Router();

routes.get("/personagens", PersonagemController.listarPersonagens);
routes.get("/personagens/buscar",PersonagemController.listarPersonagemPorParametro);
routes.post("/personagens", PersonagemController.cadastrarPersonagem);
routes.delete("/personagens/:id", PersonagemController.deletarPersonagem);
routes.put("/personagens/:id",PersonagemController.atualizarPersonagem);

export default routes;