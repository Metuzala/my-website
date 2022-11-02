import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Metusala.</h1>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/kristofer_metusala/"
            className="footer_social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.github.com/Metuzala"
            className="footer_social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://linkedin.com/in/kristofer-metusala-5637b1234
"
            className="footer_social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Kristofer Metusala. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
