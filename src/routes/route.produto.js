import { Router } from "express";
import { db } from "../config/database.js";

const routeProduto = Router();

routeProduto.get("/produtos", (req, res) => {
  db.all("select * from produto", [], (error, results) => {
    if (error) {
      return res.status(500).send("Ocorreu um erro: " + error.message);
    } else {
      return res.status(200).json(results);
    }
  });
});

export default routeProduto;
