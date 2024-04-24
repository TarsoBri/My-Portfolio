import "./About.scss";
const About = () => {
  return (
    <div className="about_conatiner">
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
    </div>
  );
};

export default About;
