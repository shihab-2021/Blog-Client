import React from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy post data
const posts = [
  {
    id: 1,
    author: "John Doe",
    date: "May 23, 2022",
    title: "8 Figma design systems that you can download for free today.",
  },
  {
    id: 2,
    author: "Smith Doe",
    date: "May 23, 2022",
    title: "Design tips for creating better user interfaces.",
  },
  {
    id: 3,
    author: "Zack Doe",
    date: "May 23, 2022",
    title: "Why accessibility should be at the core of your UI design.",
  },
  {
    id: 4,
    author: "Rock smith",
    date: "May 23, 2022",
    title: "Top 10 design tools every UI/UX designer should know.",
  },
  {
    id: 5,
    author: "Fred Doe",
    date: "May 23, 2022",
    title: "Design tips for creating better user interfaces.",
  },
  {
    id: 6,
    author: "Alex Doe",
    date: "May 23, 2022",
    title: "Why accessibility should be at the core of your UI design.",
  },
];

// Reusable Post Card
const PostCard = ({ author, date, title }) => (
  <div className="border-b border-gray-200 pb-4">
    <p className="text-sm text-gray-500">
      By <span className="text-blue-900">{author}</span> | {date}
    </p>
    <p className="mt-1 text-gray-800 animate-fadeIn">{title}</p>
  </div>
);

const FeaturedPost = () => {
  return (
    <div className="flex flex-col gap-10 p-4 max-w-7xl mx-auto md:flex-row md:p-10">
      {/* Featured Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-6 text-purple-900 animate-fadeIn md:text-4xl">
          Featured Post
        </h1>
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm text-purple-900">
          <Image
            src="/item-hom.png"
            alt="Featured"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="p-6">
            <p className="text-sm font-medium text-gray-500">
              By <span className="font-bold text-purple-900">John Doe</span> |
              May 23, 2022
            </p>
            <h2 className="mt-4 ml-6 text-xl font-semibold text-purple-900 animate-fadeIn md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <p className="mt-4 mb-8 ml-6 text-gray-600 animate-fadeIn">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Link
              href="#"
              className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* All Posts Section */}
      <div className="w-full md:w-1/3">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900 animate-fadeIn md:text-3xl">
            All Posts
          </h2>
          <Link href="#" className="text-sm text-blue-900 hover:underline">
            View all
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
