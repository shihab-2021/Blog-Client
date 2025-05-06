import Link from "next/link";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="content">
          <div className="hero-left">
            <p className="hero-featured">Featured Post</p>
            <h2 className="hero-title">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="hero-meta">
              By <span className="author">James West</span> | May 23, 2022
            </p>
            <p className="hero-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>

            <Link href="#">
              <button className="hero-button">Read More</button>
            </Link>
          </div>
          <div className="hero-right">
            <img src="/blogsH.png" alt="Featured Post" className="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
