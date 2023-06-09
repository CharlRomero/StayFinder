import Login from "../assets/login.svg";
import LogIn from "./LogIn";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Button(props) {
  const [show, setShow] = React.useState(false);

  const { loginWithRedirect } = useAuth0();

  return (
    <div className="Button">
      <img className="Button-img" src={Login} alt="" />
      <button className="Button-button" onClick={() => loginWithRedirect()}>
        {props.title}
      </button>
    </div>
  );
}

export default Button;
