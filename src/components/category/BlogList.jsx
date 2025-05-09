import BlogItem from "./BlogItem";

const BlogList = ({ blogPosts = [] }) => {
  if (!blogPosts || !Array.isArray(blogPosts)) {
    return (
      <div className="text-gray-500 font-inter text-base">
        No blog posts available
      </div>
    );
  }

  return (
    <div className="flex-1">
      {blogPosts.map((post, index) => (
        <BlogItem
          key={post.id}
          img={post.img}
          category={post.category}
          title={post.title}
          description={post.description}
          style={{ animationDelay: `${0.2 + index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default BlogList;
