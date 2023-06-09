import { useRef } from "react";
import { MenuData } from "../MenuData";
import Button from "./Button";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="Header">
      <nav className="Header-nav" ref={navRef}>
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
      <Button className="Header-button" title="Login" />
    </header>
  );
}

export default Navbar;
