import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <ul className="header_menu">
        <li>
          <button>Início</button>
        </li>
        <li>
          <button>Projetos</button>
        </li>
        <li>
          <button>Sobre</button>
        </li>
        <li>
          <button>Ferramentas</button>
        </li>
        <li>
          <button>Contato</button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
