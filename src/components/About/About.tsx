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
    ScrollReveal({ reset: true }).reveal(".about_content", {
      duration: 1000,
      distance: "100px",
      origin: "left",
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
        <div className="about_img">
          <div className="img_contour"></div>
          <img src="../../../public/FotoDePerfil.png" alt="Projeto BlogVerse" />
        </div>
        <div className="about_content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            repellat deleniti qui minima sit consequatur, deserunt ex saepe
            atque cupiditate numquam provident ipsum sapiente distinctio
            repellendus dolores unde amet? Dolore.
          </p>
          <button>
            CV
            <span>
              <FaFilePdf />
            </span>
          </button>
        </div>
        <Skils />
      </div>
    </div>
  );
};

export default About;
