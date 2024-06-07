import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  //Define a state variable to track the visibility of the hamburger menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // function to toggle the new visibility
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <>
      <nav className="nav-bar">
        <div href="#navbar" className="logo">
          Ruben Flores
        </div>

        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Ruben Flores</div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuVisible && (
            <>
              <div className="hamburger-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="menu-links">
                <li>
                  <a href="home" onClick={toggleMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="projects" onClick={toggleMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="contact" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
