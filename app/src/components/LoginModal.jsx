import Modal from "./Modal";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const LoginModal = (props) => {
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleSigin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

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
        <Button
          className="Button Button--form Button--primary"
          title="Continúa"
        />
      </form>
      <section className="Modal-logauth">
        <Button
          className="Button Button--form Button--transparent"
          title="Google"
          onClick={googleSigin}
        >
          <svg
            className="Button-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </Button>
        <Button
          className="Button Button--form Button--transparent"
          title="Facebook"
        >
          <svg
            className="Button-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
        </Button>
      </section>
    </Modal>
  );
};

export default LoginModal;
