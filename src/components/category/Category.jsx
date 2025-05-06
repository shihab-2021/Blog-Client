import "./Category.css";
import BlogList from "./BlogList";
import Sidebar from "./Sidebar";
import { blogPosts, categories, tags } from "../../TempData/blogData.js";
import Tags from "./Tags";

function Category() {
  return (
    <div className="category-container">
      <BlogList blogPosts={blogPosts} />
      <Sidebar categories={categories} tags={tags} />
    </div>
  );
}

export default Category;
