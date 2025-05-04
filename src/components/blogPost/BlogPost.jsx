import "./BlogPost.css";

const BlogPost = () => {
  return (
    <>
      <section class="hero">
        <div class="author-info">
          <img
            src="\Resources\blogPost\Author.png"
            alt="Author Avatar"
            class="avatar"
          />
          <h2>Andrew Jonson</h2>
          <h5>Posted on 27th January 2022</h5>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <img src="\Resources\author\Line.png" alt="Line" className="line" />
        </div>
        {/* <div class="category">Startup</div> */}
        <img
          src="\Resources\blogPost\Hero.png"
          alt="Hero Image"
          class="hero-image"
        />
        <img src="\Resources\author\Line.png" alt="Line" className="line" />
      </section>

      <section class="content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <h1 className="next">What to read next</h1>
      <div class="card-container">
        <div class="card">
          <img src="\Resources\blogPost\Next1.png" alt="Team discussion" />
          <div class="card-content">
            <div class="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div class="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div class="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
        <div class="card">
          <img src="\Resources\blogPost\Next2.png" alt="Group meeting" />
          <div class="card-content">
            <div class="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div class="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div class="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
        <div class="card">
          <img
            src="\Resources\blogPost\Next3.png"
            alt="Students collaborating"
          />
          <div class="card-content">
            <div class="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div class="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div class="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
      </div>
      {/* 
      <section class="cta">
        <h3>Join our team to be a part of our story</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <button>Join Now</button>
      </section> */}
    </>
  );
};

export default BlogPost;
