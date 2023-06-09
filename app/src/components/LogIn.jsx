import ButtonSign from "./ButtonSign";

const LogIn = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <section className="Login">
      <section className="Login-box">
        <section className="Box-welcome">
          <button className="Login-button btn-close" onClick={onClose}>
            x
          </button>
          <p className="Login-p">Inicia Sesión o registrate</p>
        </section>
        <form action="" className="Login-form Form">
          <input type="text" className="Form-input" placeholder="Usuario" />
          <input
            type="password"
            className="Form-input"
            placeholder="Contraseña"
          />
          <ButtonSign className="Form-button" title="Continúa" />
        </form>
        <section className="Login-auth">
          
          Gmail
        </section>
      </section>
    </section>
  );
};

export default LogIn;
