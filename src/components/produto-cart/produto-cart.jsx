import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

import "./produto-cart.css";

function ProdutoCart(props) {
  const { AddCartItem, RemoveCartItem } = useContext(CartContext);

  function RemoveItem() {
    RemoveCartItem(props.id)
  }

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
    <div className="produto-cart-container">
      <img src={props.foto} alt="foto do hambúrguer" />

      <div className="produto-infos">
        <p className="produto-cart-nome">{props.nome}</p>
        <p className="produto-cart-preco">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.preco)}
        </p>

        <div className="produto-cart-rodape">
          <div>
            <button onClick={RemoveItem} className="btn produto-cart-btn">
              -
            </button>
            <span className="produto-cart-qtd">{props.qtd}</span>
            <button onClick={AddItem} className="btn produto-cart-btn">
              +
            </button>
          </div>

          <p className="produto-cart-valor">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(props.preco * props.qtd)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProdutoCart;
