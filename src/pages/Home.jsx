import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

function Home() {
  return (
    <div>
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>

    </div>
  );
}

export default Home;