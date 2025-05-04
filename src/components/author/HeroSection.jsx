import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="content">
          <div className="left-hero">
            <img
              src="\Resources\author\author.png"
              alt="Author Image"
              className="author-img"
            />
          </div>
          <div className="icons">
            <img src="\Resources\author\Icon1.png" alt="Icon" />
            <img src="\Resources\author\Icon2.png" alt="Icon" />
            <img src="\Resources\author\Icon3.png" alt="Icon" />
            <img src="\Resources\author\Icon4.png" alt="Icon" />
          </div>
          <div className="right-hero">
            <h1 className="author-h1">
              Hey there, I’m Andrew Jonhson and welcome to my Blog
            </h1>
            <p className="author-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <img src="\Resources\author\Line.png" alt="Line" className="line" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
