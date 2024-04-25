import "./Navbar.scss";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const header = document.getElementsByClassName("header")[0];
    header.classList.toggle("appear", window.scrollY > 0);
  });

  return (
    <header className="header">
      <ul className="header_menu">
        <li>
          <a href="#">Início</a>
        </li>

        <li>
          <a href="#projects">Projetos</a>
        </li>

        <li>
          <a href="#about">Sobre</a>
        </li>

        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
