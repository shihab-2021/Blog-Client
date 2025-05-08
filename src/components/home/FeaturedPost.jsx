import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./FeaturedPost.css";

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
  <div className="post-card">
    <p className="post-meta">
      By <span className="post-meta-author">{author}</span> | {date}
    </p>
    <p className="post-title">{title}</p>
  </div>
);

const FeaturedPost = () => {
  return (
    <div className="featured-container">
      {/* Featured Section */}
      <div className="featured-section">
        <h1 className="featured-title">Featured Post</h1>
        <div className="featured-card">
          <Image
            src="/item-hom.png"
            alt="Featured"
            width={1200}
            height={600}
            className="featured-image"
          />
          <div className="featured-content">
            <p className="featured-meta">
              By <span className="featured-meta-author">John Doe</span> | May
              23, 2022
            </p>
            <h2 className="featured-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h2>
            <p className="featured-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Link href="#" className="read-more-btn">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* All Posts Section */}
      <div className="posts-section">
        <div className="posts-header">
          <h2 className="posts-title">All Posts</h2>
          <Link href="#" className="view-all-link">
            View all
          </Link>
        </div>
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
