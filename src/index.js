import express from "express";
import cors from "cors";
import routeProduto from "./routes/route.produto.js";
import routePedido from "./routes/route.pedido.js";

const app = express();

app.use(express.json());
app.use(cors());

//Rotas...
app.use(routeProduto);
app.use(routePedido);

app.listen(3001, () => {
  console.log("Servidor executando na porta 3001");
});
