import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import Rotas from "./rotas.js";
import { CartProvider } from "./contexts/cart-context.jsx";

/*Pegando o elemento root do HTML e adicionando elementos a serem renderizados(exibidos) na tela. */
/*O componente "Rotas", vai ser responsável por renderizar a rota dos componentes, cada rota será renderizada na página, quando for solicitada. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CartProvider>
      <Rotas />
    </CartProvider>
  </>
);
