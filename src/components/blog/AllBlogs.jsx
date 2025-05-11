"use client";

import React, { useEffect, useState } from "react";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogApi";
import Link from "next/link";
import { Search } from "lucide-react";
import Loading from "../shared/Loading";
import { useSearchParams } from "next/navigation";

function AllBlogs() {
  const {
    data: blogs,
    refetch: blogRefetch,
    isLoading: loadingBlog,
  } = useGetAllBlogQuery({
    refetchOnReconnect: true,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const searchParams = useSearchParams();
  const query = searchParams.get("category");

  useEffect(() => {
    if (query) {
      setSelectedCategory(query);
    }
  }, [query]);

  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredBlogs = blogs?.data?.filter((blog) => {
    const matchesSearch = blog?.title
      ?.toLowerCase()
      .includes(searchTerm?.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const currentPosts = filteredBlogs?.slice(indexOfFirstPost, indexOfLastPost);

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
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-10 px-4 sm:px-6 lg:px-8 container mx-auto mt-10 shadow-lg animate-fadeIn font-sansita rounded">
      {/* <h1 className="font-sen font-bold text-3xl md:text-4xl text-gray-900 border-b-2 border-gray-300 pb-5 mb-10 animate-slideUp">
        All Posts
      </h1> */}
      {/* Filters Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              placeholder="Search tastes..."
              className="pl-10 w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            name="category"
            value={selectedCategory}
            onChange={(e) => {
              console.log(e.target.value);
              setSelectedCategory(e.target.value);
            }}
            className="w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
          >
            <option className="hidden">Select Category</option>
            <option>All</option>
            <option>Creative</option>
            <option>Inspiration</option>
            <option>Lifestyle</option>
            <option>News</option>
            <option>Photography</option>
            <option>Skill</option>
            <option>Tourist Tours</option>
            <option>Trending</option>
            <option>Education</option>
          </select>
        </div>
      </div>

      {loadingBlog && <Loading />}

      <div className="grid gap-10">
        {!loadingBlog && currentPosts?.length === 0 && (
          <div className="text-center p-5 text-xl font-bold">
            No blog found!
          </div>
        )}
        {currentPosts?.map((post, index) => {
          const createdAt = new Date(post?.createdAt);
          if (post?.isPublic)
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
          className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer"
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
