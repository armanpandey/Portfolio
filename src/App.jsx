import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Leadership from "./components/Leadership/Leadership";
import Achievements from "./components/Achievements/Achievements";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Achievements />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
