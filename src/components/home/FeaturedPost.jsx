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
  <div className="border-b pb-4">
    <p className="text-sm text-gray-500">
      By <span className="text-amber-500">{author}</span> | {date}
    </p>
    <p className="mt-1 text-gray-800">{title}</p>
  </div>
);

const FeaturedPost = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-4 md:p-10 max-w-7xl mx-auto">
      {/* Featured Section */}
      <div className="w-full md:w-2/3">
        <h1 className="font-bold text-2xl md:text-4xl mb-6">Featured Post</h1>
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/item-hom.png"
            alt="Featured"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 font-medium">
              By <span className="text-amber-500">John Doe</span> | May 23, 2022
            </p>
            <h2 className="text-xl ml-6 md:text-2xl font-semibold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <p className="mt-4 mb-8 ml-6 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Link
              href="#"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* All Posts Section */}
      <div className="w-full md:w-1/3">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl md:text-3xl">All Posts</h2>
          <Link href="#" className="text-amber-500 text-sm hover:underline">
            View all
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
