import Modal from "./Modal";
import Button from "./Button";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SocialMediaData } from "../SocialMediaData";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
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
          value={email}
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="Modal-loginput"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="Button Button--form Button--primary"
          title="Continúa"
        />
      </form>
      <section className="Modal-logauth">
        {SocialMediaData.map((item) => {
          return (
            <Button className={item.className} title={item.title}>
              <svg
                className={item.svg.className}
                xmlns={item.svg.xmlns}
                viewBox={item.svg.viewbox}
              >
                <path d={item.path.d} />
              </svg>
            </Button>
          );
        })}
      </section>
    </Modal>
  );
};

export default LoginModal;
