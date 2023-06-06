import { useRef } from "react";
import "../styles/reset.css"

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src="" alt="StayFinder" />
      <nav ref={navRef}>
        <a href="/#">Section-1</a>
        <a href="/#">Section-2</a>
        <a href="/#">Section-3</a>
      </nav>
    </header>
  );
}

export default Navbar;
