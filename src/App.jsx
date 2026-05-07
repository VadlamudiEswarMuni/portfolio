import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#030712] text-white overflow-x-hidden">

      {/* Hero Section */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Achievements */}
      <Achievements />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
