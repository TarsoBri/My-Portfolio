import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

// Components
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skils from "./components/Skils/Skils";
import Start from "./components/Start/Start";

function App() {
  return (
    <div>
      <Navbar />

      <Start />

      <div className="content">
        <Projects />

        <About />

        <Skils />

        <Contact />
      </div>
    </div>
  );
}

export default App;
