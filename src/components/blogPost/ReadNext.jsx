import "./BlogPost.css";

const ReadNext = () => {
  return (
    <div>
      <h1 className="next">What to read next</h1>
      <div className="card-container">
        <div className="card">
          <img src="\Resources\blogPost\Next1.png" alt="Team discussion" />
          <div className="card-content">
            <div className="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div className="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
        <div className="card">
          <img src="\Resources\blogPost\Next2.png" alt="Group meeting" />
          <div className="card-content">
            <div className="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div className="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="\Resources\blogPost\Next3.png"
            alt="Students collaborating"
          />
          <div className="card-content">
            <div className="author">
              By <span>John Doe</span> | Aug 23, 2021
            </div>
            <div className="title">
              A UX Case Study Creating a Studious Environment for{" "}
              <span>Students:</span>
            </div>
            <div className="description">
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
