import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
