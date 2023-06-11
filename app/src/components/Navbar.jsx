import { useState } from "react";
import { MenuData } from "../MenuData";
import Button from "./Button";
import LoginModal from "./LoginModal";
import Login from "../assets/login.svg";


export function Navbar() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <header className="Header">
      <nav className="Header-nav">
        <img className="Header-img" src="" alt="StayFinder" />
        <ul className="Header-ul">
          {MenuData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <a className="Header-a" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <Button className="Button Button--primary" title="Login" toggle={toggle} onClick={toggle}>
        <img className="Button-img" src={Login} alt="" />
      </Button>
      <LoginModal active={active} toggle={toggle} />
    </header>
  );
}
