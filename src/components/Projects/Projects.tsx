import "./Projects.scss";
import { useEffect } from "react";

//Animation
import ScrollReveal from "scrollreveal";

//Icons
import { FaLinkedin, FaGithub, FaPiggyBank, FaCheck } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa";
import { GiMegaphone } from "react-icons/gi";

const Projects = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".showCardLeft", {
      duration: 1000,
      distance: "100px",
      origin: "left",
      easing: "ease-in-out",
    });
    ScrollReveal({ reset: true }).reveal(".showCardRigth", {
      duration: 1000,
      distance: "100px",
      origin: "rigth",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="projects" className="projects_container">
      <div className="projects_contents">
        <h2>Projetos</h2>
        <div className="project project_left showCardLeft">
          <a
            className="project_img"
            href="https://vistorias-brasil.vercel.app/"
            target="_blank"
          >
            <img
              src="/Projects_Pictures/VistoriasBrasil_print.png"
              alt="Projeto Vistorias Brasil"
            />
          </a>
          <div className="project_content">
            <h3 className="title_vistorias">
              Vistorias
              <span>
                <FaMosquito />
              </span>
              Brasil
            </h3>
            <p>
              O VistoraisBrasil tem o objetivo de ser um sistema de gerenciador
              de vistorias, onde temos dois tipos de usuários, os vistoriadores
              e os clientes com suas respectivas vistorias há serem realizadas.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7186781345279336450/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="project_content_icon"
                  href="https://github.com/TarsoBri/VistoriasBrasilBack"
                  target="_blank"
                >
                  <FaGithub /> <span>Back</span>
                </a>
              </li>
              <li>
                <a
                  className="project_content_icon"
                  href="https://github.com/TarsoBri/Vistorias-Brasil"
                  target="_blank"
                >
                  <FaGithub /> <span>Front</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project project_rigth showCardRigth">
          <a
            className="project_img"
            href="https://insidefilms.netlify.app/"
            target="_blank"
          >
            <img
              src="/Projects_Pictures/InsideFilms_print.png"
              alt="Projeto Inside Films"
            />
          </a>
          <div className="project_content">
            <h3 className="title_films">
              InsideFilms<span>§</span>
            </h3>
            <p>
              O InsideFilms é um projeto com o intuito de ser uma biblioteca de
              filmes, onde o usuário pode navegar por lançamentos, buscar
              determinado filme e favoritar filmes de sua preferência.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7165750034540576768/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TarsoBri/InsideFilms"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project project_left showCardLeft">
          <a
            className="project_img"
            href="https://blogverse-by-tarsobri.netlify.app/"
            target="_blank"
          >
            <img
              src="/Projects_Pictures/BlogVerse_print.png"
              alt="Projeto BlogVerse"
            />
          </a>
          <div className="project_content ">
            <h3 className="title_blog">
              Blog<span>Verse</span>
            </h3>
            <p>
              O BlogVerse é um projeto com a idéia de ser uma rede social, onde
              podemos criar e navegar por diversos posts de diversos usuários.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7153071758722375680/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TarsoBri/BlogVerse-React-Firebase"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="div_benefits">
          <h2>Benefícios de se ter um site</h2>
          <ul className="list_benefits">
            <li className="showCardRigth">
              <span>
                <LuMonitorSmartphone />
              </span>
              <h4>
                <span>
                  <FaCheck />
                </span>
                Presença online
              </h4>
              <p>
                As pessoas podem encontrar informações sobre você ou sua empresa
                a qualquer momento e com grande facilidade, de qualquer lugar no
                mundo.
              </p>
            </li>
            <li className="showCardLeft">
              <span>
                <FaUserTie />
              </span>
              <h4>
                <span>
                  <FaCheck />
                </span>
                Credibilidade e Profissionalismo
              </h4>
              <p>
                Ter um site bem projetado e atualizado transmite uma imagem de
                profissionalismo e credibilidade para clientes em potencial,
                parceiros comerciais e recrutadores.
              </p>
            </li>
            <li className="showCardRigth">
              <span>
                <GiMegaphone />
              </span>
              <h4>
                <span>
                  <FaCheck />
                </span>
                Marketing e Publicidade
              </h4>
              <p>
                Um site é uma ferramenta eficaz para marketing e publicidade.
                Você pode usar seu site para promover seus produtos ou serviços
                e compartilhar informações sobre sua empresa.
              </p>
            </li>
            <li className="showCardLeft">
              <span>
                <FaPiggyBank />
              </span>
              <h4>
                <span>
                  <FaCheck />
                </span>
                Baixo Custo de Manutenção
              </h4>
              <p>
                Em comparação com outras formas de marketing e publicidade, como
                anúncios impressos ou comerciais de TV, um site geralmente tem
                um custo de manutenção mais baixo e pode oferecer um retorno
                sobre o investimento (ROI) mais alto a longo prazo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
