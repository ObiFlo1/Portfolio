import "./LandingPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function LandingPage() {
  return (
    <div className="container">
      <img className="hero-shot" src="heroShot2.JPG" alt="" />
      <div className="text-container">
        <h1 className="stack-text">Full-Stack Developer 👋 </h1>
        <div className="bio">
          <p>
            Hello Im Ruben Flores, Full-Stack Developer
            <br />
            from Los Angeles, California.
            <br />
            Specialized in building websites/applications
            <br />
            <br />
            United States Army Veteren 🪖
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rubenflores114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/ObiFlo1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <a href="ruben flores resume.pdf" download>
          <button className="resume-btn">Resume</button>
        </a>
        <div className="languages-tools">languages & Tools |</div>
        <div className="tool-icons-container">
          <div className="tool-icons">
            <FontAwesomeIcon icon={faReact} style={{ color: "#61DBFB" }} />
            <FontAwesomeIcon icon={faJs} style={{ color: "#F0DB4F" }} />
            <FontAwesomeIcon icon={faHtml5} style={{ color: "#E44D26" }} />
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4" }} />
            <FontAwesomeIcon icon={faNodeJs} style={{ color: "#68A063" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
