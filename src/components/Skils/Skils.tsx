import "./Skils.scss";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaGitAlt,
  FaSass,
  FaBootstrap,
  FaJs,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Skils = () => {
  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".slider", {
      duration: 1000,
      distance: "100px",
      origin: "bottom",
      easing: "ease-in-out",
    });
  });

  const icons: JSX.Element[] = [
    <FaJs />,
    <FaReact />,
    <FaNodeJs />,
    <SiExpress />,
    <SiTypescript />,
    <FaHtml5 />,
    <FaCss3 />,
    <FaGitAlt />,
    <SiMongodb />,
    <FaPython />,
    <FaJava />,
    <FaSass />,
    <FaBootstrap />,
    <SiFirebase />,
  ];

  return (
    <div className="skils_container">
      <div className="slider">
        <ul>{icons && icons.map((icon, i) => <li key={i}>{icon}</li>)}</ul>
        <ul>{icons && icons.map((icon, i) => <li key={i}>{icon}</li>)}</ul>
      </div>
    </div>
  );
};

export default Skils;
