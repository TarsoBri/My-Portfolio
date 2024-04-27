import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact_container">
      <div className="contact_content">
        <h2>Contato</h2>
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
        </form>
        <h3>Ou entre em contato comigo por aqui</h3>
      </div>
    </div>
  );
};

export default Contact;
