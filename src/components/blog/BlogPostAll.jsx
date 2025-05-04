import React from "react";

function BlogPostAll() {
  const posts = [
    {
      id: 1,
      author: "John Doe",
      title: "Design tips for designers that cover everything you need",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      img: "/blogPhoto1.png",
      date: "May 23, 2022",
      category: "Startup",
      like: 250,
      comments: 31,
    },
    {
      id: 2,
      author: "Smith Doe",
      title: "How to build rapport with your web design clients",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      img: "/blogPhoto2.png",
      date: "May 23, 2022",
      category: "Business",
      like: 409,
      comments: 20,
    },
    {
      id: 3,
      author: "Zack Doe",
      title: "Logo design trends to avoid in 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "/blogPhoto3.png",
      date: "May 23, 2022",
      category: "Startup",
      like: 179,
      comments: 29,
    },
    {
      id: 4,
      author: "John Doe",
      title: "Design tips for designers that cover everything you need",
      desc: "8 Figma design systems you can download for free today.",
      img: "/blogPhoto4.png",
      date: "May 23, 2022",
      category: "Technology",
      like: 210,
      comments: 41,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h1 className="text-2xl md:text-4xl font-bold border-b border-gray-300 pb-4 mb-8">
        All Posts
      </h1>

      <div className="grid gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-8"
          >
            <div className="md:w-1/2">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>

            <div className="md:w-1/2">
              <span className="text-sm uppercase tracking-widest text-violet-800">
                {post.category}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold mt-2 mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.desc}</p>

              <div className="text-sm text-gray-500">
                By {post.author} | {post.date}
              </div>

              <div className="text-base text-gray-700 mt-8 flex gap-20">
                <p>Like : {post.like}</p>
                <p>Comment : {post.comments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 my-10">
        <button > Prev</button>
        <button >Next</button>
      </div>
    </div>
  );
}

export default BlogPostAll;
