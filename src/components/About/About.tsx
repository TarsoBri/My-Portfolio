import "./About.scss";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Skils from "../Skils/Skils";

const About = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".about_content", {
      duration: 1000,
      distance: "100px",
      origin: "left",
    });
    ScrollReveal({ reset: true }).reveal(".about_img", {
      duration: 1000,
      distance: "100px",
      origin: "rigth",
    });
  }, []);
  return (
    <div id="about" className="about_conatiner">
      <h2>Sobre</h2>
      <div className="about_main">
        <div className="about_content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            repellat deleniti qui minima sit consequatur, deserunt ex saepe
            atque cupiditate numquam provident ipsum sapiente distinctio
            repellendus dolores unde amet? Dolore.
          </p>
          <button>CV</button>
        </div>
        <div className="about_img">
          <div className="img_contour"></div>
          <img src="../../../public/FotoDePerfil.png" alt="Projeto BlogVerse" />
        </div>
      </div>

      <Skils />
    </div>
  );
};

export default About;
