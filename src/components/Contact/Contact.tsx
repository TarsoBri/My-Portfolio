import "./Contact.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

//animation
import ScrollReveal from "scrollreveal";

// icons
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5551998390368?text=Olá Tarso, tudo bem?";

  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    ScrollReveal({ reset: true }).reveal(".form", {
      duration: 1000,
      distance: "200px",
      origin: "bottom",
      easing: "ease-in-out",
    });
  });

  const handleChangeInputs = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setFirstName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    setFirstName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="contact_container">
      <div className="contact_content">
        <h2>Contato</h2>
        <div className="form">
          <form
            onSubmit={handleSubmitForm}
            action="https://formsubmit.co/tarsobrietzkeiracet@gmail.com"
            method="POST"
          >
            <h3>Me envie uma menssagem</h3>

            <div className="contact_content_inputs">
              <label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  name="name"
                  value={firstName}
                  onChange={handleChangeInputs}
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Seu email"
                  name="email"
                  value={email}
                  onChange={handleChangeInputs}
                  required
                />
              </label>
              <label>
                <textarea
                  placeholder="Mensagem"
                  name="message"
                  required
                  value={message}
                  onChange={handleChangeInputs}
                  rows={6}
                />
              </label>
              <input type="submit" className="contact_submit_btn" />

              <input type="hidden" name="_subject" value="Novo Contato!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />
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
