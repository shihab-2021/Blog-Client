import BlogItem from "./BlogItem";
import "./Category.css";

const BlogList = ({ blogPosts = [] }) => {
  if (!blogPosts || !Array.isArray(blogPosts)) {
    return <div>No blog posts available</div>;
  }

  return (
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
  );
};

export default BlogList;
