import Modal from "./Modal";
import Button from "./Button";

const LoginModal = (props) => {
  return (
    <Modal className="Modal" active={props.active} toggle={props.toggle}>
      <section className="Modal-logheader">
        <svg
          className="Modal-logbtnClose"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={props.toggle}
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
        <h2 className="Modal-logh2">Inicia sesión o registrate</h2>
      </section>
      <h1 className="Modal-logh1">Te damos la bienvenida a StayFinder</h1>
      <form action="" className="Modal-logform">
        <input
          type="email"
          className="Modal-loginput"
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          className="Modal-loginput"
          placeholder="Contraseña"
        />
        <Button className='Button Button--form' title="Continúa" />
      </form>
      <section className="Modal-logauth">
        <h2>Google</h2>
      </section>
    </Modal>
  );
};

export default LoginModal;
