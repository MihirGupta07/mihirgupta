import React from "react";
import "./Header.css";
import me from "../../assets/IMG_51612-removebg-preview.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const about = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello I m </h5>
        <h1 className>Mihir Gupta</h1>
        <h5 className="text-light">CSE Student at VIT Vellore</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default about;
