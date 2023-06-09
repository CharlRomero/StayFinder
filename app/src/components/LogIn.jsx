import ButtonSign from "./ButtonSign";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const LogIn = ({ show, onClose, children }) => {
  const { sigup, login, loginWithGoogle } = useAuth();

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sigup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSigin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
        <form action="" className="Login-form Form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="Form-input"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="Form-input"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <ButtonSign className="Form-button" title="Continúa" />
        </form>
        <section className="Login-auth">
          <button className="Login-google" onClick={handleGoogleSigin}>
            Google Login
          </button>
        </section>
      </section>
    </section>
  );
};

export default LogIn;
