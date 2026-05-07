import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#020b5c] text-white">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
