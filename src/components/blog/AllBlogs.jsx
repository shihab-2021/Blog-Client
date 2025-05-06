"use client";

import React, { useState } from "react";
import "./AllBlogs.css";

function AllBlogs() {
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

  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">All Posts</h1>

      <div className="blogs-grid">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <div className="blog-image-container">
              <img src={post.img} alt={post.title} className="blog-image" />
            </div>

            <div className="blog-content">
              <span className="blog-category">{post.category}</span>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-desc">{post.desc}</p>

              <div className="blog-meta">
                By {post.author} | {post.date}
              </div>

              <div className="blog-stats">
                <p>Like: {post.like}</p>
                <p>Comment: {post.comments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blogs-pagination">
        <button
          className="pagination-btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="pagination-btn"
          onClick={handleNext}
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllBlogs;
