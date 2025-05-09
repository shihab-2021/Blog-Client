import React from "react";

const Posts = () => {
  const posts = [
    {
      category: "BUSINESS",
      title: "Font sizes in UI design: The complete guide to follow",
      image: "/Resources/author/Post1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "ECONOMY",
      title: "How to build rapport with your web design clients",
      image: "/Resources/author/Post2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
        My Posts
      </h2>
      <div className="flex flex-col gap-8">
        {posts.map((post, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row gap-6 bg-white p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.image}
              alt="Post Image"
              className="w-full md:w-[412px] h-[240px] md:h-[320px] object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-1">
              <span className="inline-block text-purple-600 font-semibold text-sm sm:text-base mb-2">
                {post.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight cursor-pointer transition-colors duration-300 hover:text-purple-700 ">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Posts;
