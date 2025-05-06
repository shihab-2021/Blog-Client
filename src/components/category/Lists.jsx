import { blogPosts } from "../../TempData/blogData";
import BlogItem from "./BlogList";
import "./Category.css";

const List = () => {
  return (
    <div className="category-container">
      <div className="blog-list">
        {blogPosts.map((post) => (
          <BlogItem
            key={post.id}
            img={post.img}
            category={post.category}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
