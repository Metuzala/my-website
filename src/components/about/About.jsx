import React from "react";
import "./about.css";
import AboutImg from "../../assets/AboutImg.jpg";
import CV from "../../assets/Cv.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <h3 className="introduction_title">Me, Myself and I</h3>
          <p className="about_description">
            Since 2021 I have been studing frontend web development. First by
            myself and later in Software Development Academy. I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills then don't hesitate to
            contact me.
          </p>

          <a
            download="Kristofer.Metusala.pdf"
            href={CV}
            className="button button--flex"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
