import JoinNow from "@/components/aboutUs/JoinNow";
import AllBlogs from "@/components/blog/AllBlogs";
import Hero from "@/components/blog/Hero";

import Sidebar from "@/components/category/Sidebar";
import { categories } from "@/TempData/blogData";

function Blog() {
  return (
    <>
      <Hero />
      <AllBlogs />
      <Sidebar categories={categories} />
      <JoinNow />
    </>
  );
}

export default Blog;
