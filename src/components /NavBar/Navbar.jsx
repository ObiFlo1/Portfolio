import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div href="#navbar" className="logo">
          Ruben Flores
        </div>

        <ul className="nav-links">
          <li>
            <a
              href="#about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
