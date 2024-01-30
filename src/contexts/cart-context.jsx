import { createContext, useState } from "react";

const CartContext = createContext();
//Utilizando da "ContextAPI" para poder englobar a aplicação e realizar as transações.
function CartProvider(props) {
  /*O "useState" é um hook(gancho) que serve para alterar o estado de determinado campo/componente. */
  const [cartItems, setCartItems] = useState([]);
  //Alterando estado do valor total do carrinho:
  const [totalCart, setTotalCart] = useState(0);

  function AddCartItem(item) {
    let cartItemsNovo = [];
    let findItem = false;

    /*Verificando se o item já existe no carrinho: */
    for (let produto of cartItems) {
      //Um produto já existe:
      if (produto.id === item.id) {
        //Alterando apenas a quantidade do produto, caso exista:
        item.qtd = produto.qtd + 1;
        findItem = true;
        //Adicionando apenas o item na quantidade:
        cartItemsNovo.push(item);
      } else {
        //Adicionando o produto inteiro, caso não exista:
        cartItemsNovo.push(produto);
      }
    }

    //Se não encontrar item por conta de estar vazio o carrinho:
    if (findItem === false || cartItems.length === 0) {
      cartItemsNovo.push(item);
    }
    //Alterando o estadio, exibindo no carrinho:
    setCartItems(cartItemsNovo);
    CalculoTotal(cartItemsNovo);
  }

  function RemoveCartItem(id) {
    let cartItemsNovo = [];

    /*Localiza o item e atualiza, removendo ele: */
    for (let produto of cartItems) {
      //Encontrou o produto:
      if (produto.id === id) {
        //Alterando apenas a quantidade do produto encontrado:
        produto.qtd = produto.qtd - 1;
      }
      //Atualiza o valor do item no carrinho:
      cartItemsNovo.push(produto);
    }
    //Removendo itens quando a quantidade chegar em 0:
    //A lógica consiste em filtrar o array, para manter e exibir nele apenas os itens que a quantidade é maior que 0.
    cartItemsNovo = cartItemsNovo.filter((item) => {
      return item.qtd > 0;
    });
    //Alterando o estadio, exibindo no carrinho:
    setCartItems(cartItemsNovo);
    CalculoTotal(cartItemsNovo);
  }

  function CalculoTotal(items) {
    let total = 0;

    for (let item of items) {
      total = total + item.preco * item.qtd;
    }

    setTotalCart(total);
  }

  return (
    /*Elementos que serão exportados para a aplicação. */
    /*"props.children serve para possibilitar que os filhos do cartProvider utilizarão dele." */
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddCartItem,
        RemoveCartItem,
        totalCart,
        setTotalCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
