import Login from "../assets/login.svg";
import LogIn from "./LogIn";
import React from "react";

function Button(props) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="Button">
      <img className="Button-img" src={Login} alt="" />
      <button className="Button-button" onClick={() => setShow(true)}>
        {props.title}
      </button>
      <LogIn show={show} onClose={() => setShow(false)}></LogIn>
    </div>
  );
}

export default Button;
