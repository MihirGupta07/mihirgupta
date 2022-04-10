import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
