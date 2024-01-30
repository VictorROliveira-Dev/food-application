import "./navbar.css";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import Cart from "../cart/cart";
/*O "Link" é outra forma de fazer navegações em páginas com o react */
import { Link } from "react-router-dom";

function Navbar(props) {
  function openSidebar() {
    /*Criando um evento para ser escutado por toda a tela, e capturado pelo ouvinte(podendo ser outro component ou o mesmo.) */
    const event = new CustomEvent("openSidebar");
    window.dispatchEvent(event);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logotipo" alt="Logotipo" />
      </Link>

      {
        /*Condição para renderizar ou não os itens da navbar, na tela home (sim) e na tela de checkout (não) */
        /*O componente que tiver a propriedade "showMenu", exibirá os itens da navbar */
        props.showMenu ? (
          <div className="menu">
            <Link to="/historico">Histórico</Link>
            <button onClick={openSidebar} className="btn btn-red">
              <img className="icon" src={bag} alt="Ícone sacola de compras" />
              Sacola
            </button>
          </div>
        ) : null
      }

      <Cart />
    </div>
  );
}

export default Navbar;
