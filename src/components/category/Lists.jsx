import { blogPosts } from "../../TempData/blogData";
import BlogItem from "./BlogList";

const List = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 animate-fadeIn">
      <div className="flex-1">
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
