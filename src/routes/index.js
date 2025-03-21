import express from "express";
import personagens from "./personagensRoutes.js";

const routes = (app) => {
    app.route("/").get ((req, res) => res.status(200).send("Bem vindo a API RPG-HUB"));

    app.use(express.json(), personagens);
};



export default routes;