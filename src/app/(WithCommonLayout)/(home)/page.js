/* eslint-disable @next/next/no-img-element */
import FeaturedPost from "@/components/home/FeaturedPost";
import Mission from "@/components/home/Misson";
import Category2 from "@/components/blog/Category2";
import { categories } from "@/TempData/blogData";
// import AuthorList from "@/components/aboutUs/AuthorList";
import JoinNow from "@/components/aboutUs/JoinNow";
import Hero from "@/components/home/Hero";

export default function page() {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <Mission />
      <Category2 categories={categories} />
      {/* <AuthorList /> */}
      <JoinNow />
    </>
  );
}
