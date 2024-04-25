import "./Start.scss";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Start = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".start_content", {
      duration: 2000,
    });
  }, []);
  return (
    <div className="start_container">
      <div className="background_animate">
        <div className="start_content">
          <h1>Tarso Brietzke Iracet</h1>
          <p>Desenvolvedor Web</p>
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
    </div>
  );
};

export default Start;
