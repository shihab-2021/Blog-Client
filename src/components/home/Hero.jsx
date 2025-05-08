import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="header-section">
        <div className="hero-container">
          <p className="hero-subtitle">Posted on startup</p>
          <p className="hero-title">Step-by-step guide to</p>
          <p className="hero-title">great font pairs</p>
          <p className="hero-meta">
            By <span className="hero-meta-author">James West</span> | May 23,
            2022
          </p>
          <p className="hero-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </p>
          <div>
            <a href="/blog" className="read-more-btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
