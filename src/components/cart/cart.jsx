import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";

import "./cart.css";

function Cart() {
  /*O "useState" é um hook(gancho) que serve para alterar o estado de determinado campo/componente. */
  const [show, setShow] = useState(false);
  const { cartItems, totalCart } = useContext(CartContext);
  
  /*O "useEffect" serve para escutar eventos, externos ou não(Através de uma função), caso as condições passadas sejam atingidas. */
  useEffect(() => {
    window.addEventListener("openSidebar", () => {
      setShow(true);
    });
  }, []);

  function closeWindow() {
    setShow(false);
  }
  /*O "useNavigate" serve para realizar a navegação entre as páginas. */
  const navigate = useNavigate();

  function checkout() {
    /*Passa como parâmetro a rota da página para qual a rota deve seguir. */
    navigate("/checkout");
  }

  /*O "Dock" serve para construção de um layout. */
  /*Tudo que estiver envolvido pelo component Dock, estará dentro do layout. */
  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={360}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div className="text-center">
      <button onClick={closeWindow} className="cart-button-close"><i class="fa-solid fa-xmark"></i></button>
        <h1 className="titulo-pedido">Meu Pedido:</h1>
      </div>

      <div className="lista-produtos">
        {cartItems.map((item) => {
          return (
            <ProdutoCart
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              qtd={item.qtd}
              preco={item.preco}
            />
          );
        })}
      </div>

      <div className="cart-rodape">
        <div className="cart-valor">
          <span>Total: </span>
          <span>
            <strong>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalCart)}
            </strong>
          </span>
        </div>
        <div>
          <button className="btn btn-checkout" onClick={checkout}>
            Finalizar Pedido! &#129316;
          </button>
        </div>
      </div>
    </Dock>
  );
}

export default Cart;
