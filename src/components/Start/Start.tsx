import "./Start.scss";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// icons
import { FaArrowAltCircleDown } from "react-icons/fa";

const Start = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".start_content", {
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="start_container">
      <div className="background_animate">
        <div className="start_content">
          <h1>Tarso Brietzke Iracet</h1>
          <p>Desenvolvedor Web</p>
          <a href="#contact">Vamos trabalhar juntos</a>
        </div>

        <ul className="box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <a href="#projects" className="btn_down">
        <FaArrowAltCircleDown />
      </a>
    </div>
  );
};

export default Start;
