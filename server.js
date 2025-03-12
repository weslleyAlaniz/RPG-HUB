import express from "express";
import app from "./scr/app.js";

const PORT = 3000;



app.listen(PORT, () => {
    console.log("Servidor escutando")
  })

