import { useState } from "react";
import Login from "../assets/login.svg";
import LoginModal from "./LoginModal";

function Button(props) {

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="Button">
      <img className="Button-img" src={Login} alt="" />
      <button className="Button-button" onClick={toggle}>
        {props.title}
      </button>
      <LoginModal active={active} toggle={toggle} />
    </div>
  );
}

export default Button;
