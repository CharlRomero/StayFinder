import Login from "../assets/login.svg";

function Button() {
  return (
    <div className="Button">
      <img className="Button-img" src={Login} alt="" />
      <button className="Button-button" onClick={LogIn}>
        Log in
      </button>
    </div>
  );
}

export default Button;
