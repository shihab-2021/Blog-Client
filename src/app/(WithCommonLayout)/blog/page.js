import Link from "next/link";
import React from "react";
import BlogPostAll from "@/components/blog/BlogPostAll";
import Catagory from "@/components/home/Catagory";
import JoinOurTeam from "@/components/home/JoinOurTeam";




function Blog() {
  return (
    <>
      <div className="bg-fuchsia-50 px-4 py-10 md:px-10 lg:px-20 mt-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm md:text-base tracking-widest text-black mb-4 md:mb-8">
              Featured Post
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3 md:mb-4">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              By <span className="text-amber-500 font-medium">James West</span>{" "}
              | May 23, 2022
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>

            <Link href="#">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded transition-all duration-300">
                Read More
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/blogsH.png"
              alt="Featured Post"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Blog Post */}
      <BlogPostAll />
      <Catagory />
      <JoinOurTeam />
    </>
  );
}

export default Blog;
