import JoinNow from "@/components/aboutUs/JoinNow";
import AllBlogs from "@/components/blog/AllBlogs";
import Category2 from "@/components/blog/Category2";
import Hero from "@/components/blog/Hero";
import { categories } from "@/TempData/blogData";

function Blog() {
  return (
    <>
      <Hero />
      <AllBlogs />
      <Category2 categories={categories} />
      <JoinNow />
    </>
  );
}

export default Blog;
