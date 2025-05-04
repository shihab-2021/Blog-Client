import "./Posts.css";

const Posts = () => {
  return (
    <>
      <section class="posts">
        <h2>My Posts</h2>
        <div class="post-list">
          <div class="post">
            <img
              src="\Resources\author\Post1.png"
              alt="Post Image"
              className="post-image"
            />
            <div class="post-content">
              <span class="category">BUSINESS</span>
              <h3>Font sizes in UI design: The complete guide to follow</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="post">
            <img
              src="\Resources\author\Post2.png"
              alt="Post Image"
              className="post-image"
            />
            <div class="post-content">
              <span class="category">ECONOMY</span>
              <h3>How to build rapport with your web design clients</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
