import { useRef } from "react";
import "./App.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav>
      <a href="#section1" onClick={(e) => scrollToSection(e, "section1")}>
        Section 1
      </a>
      <a href="#section2" onClick={(e) => scrollToSection(e, "section2")}>
        Section 2
      </a>
      <a href="#section3" onClick={(e) => scrollToSection(e, "section3")}>
        Section 3
      </a>
    </nav>
  );
};

const Section = ({ id, title, content }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

const App = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Section id="section1" title="Section 1" content="Welcome to Section 1" ref={sectionRefs.section1} />
      <Section id="section2" title="Section 2" content="Welcome to Section 2" ref={sectionRefs.section2} />
      <Section id="section3" title="Section 3" content="Welcome to Section 3" ref={sectionRefs.section3} />
    </div>
  );
};

export default App;
