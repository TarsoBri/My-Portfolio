import "./Projects.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects_container">
      <h2>Projetos</h2>

      <div className="project left">
        <img
          src="../../../public/Projects_Pictures/VistoriasBrasil_print.png"
          alt="Projeto BlogVerse"
        />
        <div className="project_content">
          <h3>VistoriasBrasil</h3>
          <p>
            O BlogVerse é um projeto com o objetivo de criar e navegar por posts
            de diversos usuários.
          </p>
          <ul>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="project rigth">
        <div className="project_content">
          <h3>InsideFilms</h3>
          <p>
            O BlogVerse é um projeto com o objetivo de criar e navegar por posts
            de diversos usuários.
          </p>
          <ul>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <img
          src="../../../public/Projects_Pictures/InsideFilms_print.png"
          alt="Projeto BlogVerse"
        />
      </div>

      <div className="project left">
        <img
          src="../../../public/Projects_Pictures/BlogVerse_print.png"
          alt="Projeto BlogVerse"
        />
        <div className="project_content">
          <h3>BlogVerse</h3>
          <p>
            O BlogVerse é um projeto com o objetivo de criar e navegar por posts
            de diversos usuários.
          </p>
          <ul>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
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
