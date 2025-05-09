"use client";

import React, { useState } from "react";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogApi";
import Link from "next/link";

function AllBlogs() {
  const { data: blogs, refetch: blogRefetch } = useGetAllBlogQuery({
    refetchOnReconnect: true,
  });

  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs?.data?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(blogs?.data?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 max-w-[1700px] mx-auto mt-20 shadow-lg animate-fadeIn">
      <h1 className="font-sen font-bold text-3xl md:text-4xl text-gray-900 border-b-2 border-gray-300 pb-5 mb-10 animate-slideUp">
        All Posts
      </h1>

      <div className="grid gap-10">
        {currentPosts?.map((post, index) => {
          const createdAt = new Date(post?.createdAt);
          return (
            <div
              key={post._id}
              className="flex flex-col lg:flex-row gap-8 border-b border-gray-200 pb-8 animate-slideUp"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-full lg:w-1/2">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-[1.01] hover:shadow-xl transition-all duration-300"
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <span className="font-inter font-bold text-sm uppercase tracking-wider text-purple-600 animate-fadeInText">
                  {post.category}
                </span>
                <Link
                  href={`/blogPost/${post?._id}`}
                  className="font-sen font-bold text-xl md:text-2xl text-gray-900 hover:text-purple-600 hover:-translate-y-1 transition-all duration-300"
                >
                  {post.title}
                </Link>
                <p className="font-inter text-gray-600 text-base">
                  By {post.author?.name} |{" "}
                  {createdAt?.toUTCString()?.slice(0, -12)}
                </p>
                <div className="flex gap-8 font-inter text-gray-600 text-base animate-fadeInText">
                  <p>Like: {post?.like?.length}</p>
                  <p>Comment: {post.comment?.length}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
          onClick={handleNext}
          disabled={
            currentPage === Math.ceil(blogs?.data?.length / postsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllBlogs;
