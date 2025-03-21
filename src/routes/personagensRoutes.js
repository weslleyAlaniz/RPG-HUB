import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const routes = express.Router();

routes.get("/personagens", PersonagemController.listarPersonagens);
routes.get("/personagens/:id",PersonagemController.listarPersonagemPorId);
routes.post("/personagens", PersonagemController.cadastrarPersonagem);


export default routes;