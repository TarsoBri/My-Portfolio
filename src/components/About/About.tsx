import "./About.scss";
import { useEffect } from "react";

//Animation
import ScrollReveal from "scrollreveal";
//Icons
import { FaFilePdf } from "react-icons/fa6";

//Components
import Skils from "../Skils/Skils";

const About = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".about_texts", {
      duration: 1000,
      distance: "100px",
      origin: "rigth",
      easing: "ease-in-out",
    });
    ScrollReveal({ reset: true }).reveal(".about_img img", {
      duration: 1000,
      distance: "100px",
      origin: "rigth",
      easing: "ease-in-out",
    });
    ScrollReveal({ reset: true }).reveal(".img_contour", {
      duration: 1000,
      distance: "100px",
      origin: "left",
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div id="about" className="about_conatiner">
      <div className="about_main">
        <h2>Sobre</h2>
        <div className="about_content">
          <div className="about_img">
            <div className="img_contour"></div>
            <img src="/FotoDePerfil.png" alt="Projeto BlogVerse" />
          </div>
          <div className="about_texts">
            <p>
              Me chamo Tarso, sou desenvolvedor web e estou graduando em Análise
              e Desenvolvimento de Sistemas na Unisinos. Sou apaixonado em tudo
              que envolve tecnologia e meu objetivo é adquirir conhecimentos e
              praticar cada vez mais para melhorar profissionalmente, buscando
              sempre a segurança e a satisfação do cliente, que tal trabalharmos
              juntos em um projeto? Sou um cara comunicativo e que se da muito
              bem com as pessoas. Veja meu currículo virtual abaixo para mais
              detalhes sobre mim.
            </p>
            <a href="/Currículo Tarso.pdf" download="Currículo de Tarso_bri">
              CV
              <span>
                <FaFilePdf />
              </span>
            </a>
          </div>
        </div>
        <Skils />
      </div>
    </div>
  );
};

export default About;
