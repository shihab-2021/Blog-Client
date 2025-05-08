import React from "react";
import "./Mission.css";

function Mission() {
  return (
    <section className="about-container">
      <div className="divider-container">
        <div className="divider-amber"></div>
        <div className="divider-purple"></div>
      </div>

      <div className="content-wrapper">
        {/* ABOUT US */}
        <div className="content-section">
          <p className="section-subtitle">About Us</p>
          <h2 className="section-title">
            We are a community of content writers who share their learnings
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="read-more-link">
            Read More →
          </a>
        </div>

        {/* OUR MISSION */}
        <div className="content-section">
          <p className="section-subtitle">Our Mission</p>
          <h2 className="section-title">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
