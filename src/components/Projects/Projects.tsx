import { useEffect } from "react";
import "./Projects.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
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
      <div className="projects_contents">
        <h2>Projetos</h2>
        <div className="project project_left">
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
              O VistoraisBrasil tem o objetivo de ser um gerenciador de
              vistorias, onde temos dois tipos de usuários, os vistoriadores e
              os clientes com suas respectivas vistorias há serem realizadas.
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

        <div className="project project_left">
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
          <div className="project_content">
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
      </div>
    </div>
  );
};

export default Projects;
