import "./BlogPost.css";

const Blogger = () => {
  return (
    <div>
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
    </div>
  );
};

export default Blogger;
