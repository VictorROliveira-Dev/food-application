import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produtos-vitrine/produto-vitrine";
import api from "../../services/api.js";

function Home() {
  //Variável para receber os dados da API e alterar o estado da tela, para exibir os dados:
  const [produtos, setProdutos] = useState([]);

  //Com o "useEffect", caso não seja passado nenhum parâmetro, a função é carregada uma única vez quando a página é carregada.
  //O "then" serve para realizar a função passada, somente quando todos os dados forem carregados, já que está como uma promise.
  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        alert("Erro ao carregar produtos!😞");
      });
  }, []);

  return (
    <>
      <Navbar showMenu />

      <div className="container">
        <div className="titulo text-center">
          <h1>Nosso Cardápio:</h1>
          <p className="subtitulo">
            Clique em adicionar para colocar os produtos na sacola de compras.
            Se preferir, você pode pedir pelo whatsapp: (XX) 9XXXX-XXXX
          </p>
        </div>
      </div>
      <div className="text-center">
        {produtos.map((produto) => {
          return (
            /*A propriedad "Key" serve para diferenciar cada item, com base no parâmetro passado. */
            <ProdutoVitrine
              key={produto.id_produto}
              id={produto.id_produto}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              foto={produto.foto}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
