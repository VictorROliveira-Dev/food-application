import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import api from "../../services/api.js";

import "./historico.css";

function Historico() {
  const [pedidos, setPedidos] = useState([]);
  
  useEffect(() => {
    api
      .get("/pedidos")
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((error) => {
        alert("Erro ao carregar pedidos!😞");
      });
  }, []);

  return (
    <>
      <Navbar showMenu />

      <div className="container">
        <div className="titulo text-center">
          <h1>Histórico de Pedidos:</h1>
        </div>

        <div className="pedido-container">
          <table className="table">
            {
              /*O "map" vai percorrer o array e exibir os dados dele na tela. */
              pedidos.map((pedido) => {
                return (
                  <tr key={pedido.id_pedido}>
                    <td className="text-white">Pedido: {pedido.id_pedido}</td>
                    <td className="text-light">{pedido.dt_pedido}</td>
                    <td className="text-red">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(pedido.total)}
                    </td>
                  </tr>
                );
              })
            }
          </table>
        </div>
      </div>
    </>
  );
}

export default Historico;
