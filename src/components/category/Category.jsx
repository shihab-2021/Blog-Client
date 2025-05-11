import BlogList from "./BlogList";
import Sidebar from "./Sidebar";
import { blogPosts, categories, tags } from "../../TempData/blogData.js";

function Category() {
  return (
    <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 flex flex-col md:flex-row gap-12 shadow-lg animate-fadeIn">
      <BlogList blogPosts={blogPosts} />
      <Sidebar categories={categories} tags={tags} />
    </div>
  );
}

export default Category;
