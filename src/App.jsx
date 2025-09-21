import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import Footer from "./component/Footer";
import Background from "./component/Background";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Loader from "./component/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Background intensity="high" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
