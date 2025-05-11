import JoinNow from "@/components/aboutUs/JoinNow";
import AllBlogs from "@/components/blog/AllBlogs";
import Category2 from "@/components/blog/Category2";
import Hero from "@/components/blog/Hero";
import { categories } from "@/TempData/blogData";
import { Suspense } from "react";

function Blog() {
  return (
    <>
      <Hero />
      <Suspense>
        <AllBlogs />
      </Suspense>
      {/* <Category2 categories={categories} /> */}
      <JoinNow />
    </>
  );
}

export default Blog;
