import "./App.css";
import Footer from "./Components/Footer";
import Img from "./Components/Img";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <div className="flex-center">
        <Img />
        <Intro />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
