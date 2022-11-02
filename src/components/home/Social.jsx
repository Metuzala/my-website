import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/kristofer_metusala/"
        className="home_social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.github.com/Metuzala"
        className="home_social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kristofer-metusala-5637b1234"
        className="home_social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
