import "./Contact.scss";
import { useEffect } from "react";

//animation
import ScrollReveal from "scrollreveal";

// icons
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5551998390368?text=Olá Tarso, tudo bem?";

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".form", {
      duration: 1000,
      distance: "200px",
      origin: "bottom",
      easing: "ease-in-out",
    });
  });

  return (
    <div id="contact" className="contact_container">
      <div className="contact_content">
        <h2>Contato</h2>
        <div className="form">
          <form>
            <h3>Me envie uma menssagem</h3>

            <div className="contact_content_inputs">
              <label>
                <input type="text" placeholder="Seu nome" required />
              </label>
              <label>
                <input type="text" placeholder="Seu email" required />
              </label>
              <label>
                <textarea placeholder="Mensagem" required rows={6} />
              </label>
              <input type="submit" className="contact_submit_btn" />
            </div>

            <h4>Ou</h4>
            <ul className="list_contacts">
              <li>
                <a href="https://github.com/TarsoBri/" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tarso-brietzke-iracet-5556b5262/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </form>

          <a href="#" className="button_top">
            <FaArrowAltCircleUp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
