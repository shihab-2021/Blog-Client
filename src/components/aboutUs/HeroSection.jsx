import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <h3 className="about-us-text1">ABOUT US</h3>
          <h1 className="about-us-text2">
            We are a team of content writers who share their learnings
          </h1>
        </div>
        <div className="right-header">
          <p className="about-us-text3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="hero-section">
        <div className="box">
          <div className="sqr">
            <h2>12+</h2>
            <p>Blogs Published</p>
          </div>
          <div className="sqr">
            <h2>18K+</h2>
            <p>Views on Finsweet</p>
          </div>
          <div className="sqr">
            <h2>30K+</h2>
            <p>Total active Users</p>
          </div>
        </div>
        <img
          src="/Resources/aboutUs/Line.png"
          alt="Line Image"
          className="line-img"
        />
      </div>
      <div className="mission">
        <div className="left-mission">
          <h3>OUR MISSION</h3>
          <h1>Creating valuable content for creatives all around the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="right-vision">
          <h3>OUR VISION</h3>
          <h1>A platform that empowers individuals to improve</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="left-team">
          <h3>OUR TEAM</h3>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="right-team">
          <img
            src="\Resources\aboutUs\Hand.png"
            alt="Hand Img"
            className="hand-img"
          />
        </div>
      </div>
      <div className="blog">
        <div className="left-blog">
          <img
            src="\Resources\aboutUs\Blog.png"
            alt="Hand Img"
            className="hand-img"
          />
        </div>
        <div className="right-blog">
          <h3>OUR TEAM</h3>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
