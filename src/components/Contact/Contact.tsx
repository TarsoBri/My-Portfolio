import "./Contact.scss";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

//animation
import ScrollReveal from "scrollreveal";

// icons
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Oval } from "react-loading-icons";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Contact = () => {
  const whatsappUrl = "https://wa.me/5551998390368?text=Olá Tarso, tudo bem?";

  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notfication, setNotfication] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    axios.defaults.headers.post["Content-Type"] = "application/json";
    await axios
      .post("https://formsubmit.co/ajax/82846a29906a6d328d9e34b1fb644dbd", {
        name: firstName,
        email: email,
        message: message,
        _template: "box",
        _subject: "Novo Contato!",
        _honey: { display: "none" },
      })
      .then(() => setNotfication("Mensagem enviada com sucesso!"))
      .catch(() => setNotfication("Erro ao enviar mensagem!"))
      .finally(() => {
        setLoading(false);
        setFirstName("");
        setEmail("");
        setMessage("");
      });
  };

  useEffect(() => {
    if (notfication != "") {
      const containerNotfication = document.querySelector(
        ".container_notfication"
      ) as HTMLElement;
      const containerNotficationLoader = document.querySelector(
        ".container_notfication_loader"
      ) as HTMLElement;

      containerNotfication.style.animation =
        "show_notfication 1.5s ease-in-out";

      containerNotficationLoader.style.animation =
        "show_notfication_loader 5.5s ease-in-out";

      setTimeout(() => {
        containerNotfication.style.animation =
          "hidden_notfication 1.5s ease-in-out";
        setTimeout(() => {
          setNotfication("");
          containerNotfication.style.display = "none";
        }, 1500);
      }, 5000);
    }
  }, [notfication]);

  return (
    <div id="contact" className="contact_container">
      {notfication != "" && (
        <div
          className="container_notfication"
          style={{
            backgroundColor: notfication.includes("Erro") ? "red" : "green",
          }}
        >
          <p>{notfication}</p>
          <span>
            <IoMdInformationCircleOutline />
          </span>
          <div className="container_notfication_loader"></div>
        </div>
      )}
      <div className="contact_content">
        <h2>Contato</h2>
        <div className="form">
          <form onSubmit={handleSubmitForm}>
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
                  type="email"
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
                  value={message}
                  onChange={handleChangeInputs}
                  rows={6}
                  required
                />
              </label>

              <button
                type="submit"
                className="contact_submit_btn"
                style={{
                  backgroundColor: loading ? "#453745" : "",
                }}
              >
                {loading ? <Oval className="loading" /> : "Enviar"}
              </button>
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
