import React from "react";
import "./About.css";
import ME from "../../assets/MihirPhoto.png";
const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__cards">
              <h5>Experience</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
