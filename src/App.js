import LandingPage from "./components /LandingPage/LandingPage";
import NavBar from "./components /NavBar/Navbar";
import About from "./components /About/About.jsx";
import Projects from "./components /Projects /Projects.jsx";
import "./App.css";
import Contact from "./components /Contact/Contact.jsx";
import Footer from "./components /Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
