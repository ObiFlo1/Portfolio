import LandingPage from "./components /LandingPage/LandingPage";
import NavBar from "./components /NavBar/Navbar";
import About from "./components /About/About.jsx";
import Contact from "./components /Contact/Contact.jsx";
import Footer from "./components /Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
