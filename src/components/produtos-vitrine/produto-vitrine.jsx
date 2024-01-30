import { useContext } from "react";
import bag from "../../assets/bag-black.png";
import { CartContext } from "../../contexts/cart-context";

import "./produto-vitrine.css";

function ProdutoVitrine(props) {
  const { AddCartItem } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1,
    };

    AddCartItem(item);
  }

  return (
    <div className="produto-box text-center">
      <img src={props.foto} alt="foto da comida" />
      <div>
        <h2 className="titulo-produto-vitrine">{props.nome}</h2>
        <p className="descricao-produto-vitrine">{props.descricao}</p>
        <p className="preco-produto-vitrine">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>
      </div>

      <div>
        <button onClick={AddItem} className="btn btn-cart">
          <img className="icon" src={bag} alt="Ícone do botão do carrinho" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProdutoVitrine;
