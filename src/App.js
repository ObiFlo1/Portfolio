import LandingPage from "./client/components /LandingPage/LandingPage.jsx";
import NavBar from "./client/components /NavBar/Navbar.jsx";
import About from "./client/components /About/About.jsx";
import Contact from "./client/components /Contact/Contact.jsx";
import Footer from "./client/components /Footer/Footer.jsx";
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
