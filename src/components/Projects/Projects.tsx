import { useEffect } from "react";
import "./Projects.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Projects = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".project_left", {
      duration: 1000,
      distance: "100px",
      origin: "left",
      easing: "ease-in-out",
    });
    ScrollReveal({ reset: true }).reveal(".project_rigth", {
      duration: 1000,
      distance: "100px",
      origin: "rigth",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="projects" className="projects_container">
      <h2>Projetos</h2>

      <div className="project project_left">
        <a
          className="project_img"
          href="https://vistorias-brasil.vercel.app/"
          target="_blank"
        >
          <img
            src="../../../public/Projects_Pictures/VistoriasBrasil_print.png"
            alt="Projeto Vistorias Brasil"
          />
        </a>
        <div className="project_content">
          <h3>VistoriasBrasil</h3>
          <p>
            Tendo como primeiro objetivo, facilitar vistorias pelo Brasil,
            possibilitando o necessitado do serviço solicitar sua vistoria
            preenchendo seus dados residências. E como segundo objetivo, ajudar
            os vistoriadores do nosso serviço a acharem novas vistorias
            facilmente, além de defini-las como já vistoriada ou não.
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

      <div className="project project_rigth">
        <a
          className="project_img"
          href="https://insidefilms.netlify.app/"
          target="_blank"
        >
          <img
            src="../../../public/Projects_Pictures/InsideFilms_print.png"
            alt="Projeto Inside Films"
          />
        </a>
        <div className="project_content">
          <h3>InsideFilms</h3>
          <p>
            O BlogVerse é um projeto com o objetivo de criar e navegar por posts
            de diversos usuários.
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
              <a href="https://github.com/TarsoBri/InsideFilms" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="project project_left">
        <a
          className="project_img"
          href="https://blogverse-by-tarsobri.netlify.app/"
          target="_blank"
        >
          <img
            src="../../../public/Projects_Pictures/BlogVerse_print.png"
            alt="Projeto BlogVerse"
          />
        </a>
        <div className="project_content">
          <h3>BlogVerse</h3>
          <p>
            O BlogVerse é um projeto com o objetivo de criar e navegar por posts
            de diversos usuários.
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
    </div>
  );
};

export default Projects;
