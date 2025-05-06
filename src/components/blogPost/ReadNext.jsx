import "./BlogPost.css";

const ReadNext = () => {
  return (
    <div>
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
    </div>
  );
};

export default ReadNext;
