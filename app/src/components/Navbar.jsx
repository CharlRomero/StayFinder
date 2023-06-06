import { useRef } from "react";
import { MenuData } from "../MenuData";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="Header">
      <img className="Header-img" src="" alt="StayFinder" />
      <nav className="Header-nav" ref={navRef}>
        <ul className="Header-ul">
            {MenuData.map((item, index) => {
                return (
                    <li key={index} className={item.className}>
                        <a className="Header-a" href={item.url}>{item.title}</a>
                    </li>
                );
            })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
