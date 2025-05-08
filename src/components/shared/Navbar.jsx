"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <Link href="/" className="logo">
            LOGO
          </Link>
        </div>

        <form className="search-form" role="search">
          <input type="search" placeholder="Search" aria-label="Search" />
          <button type="submit">Search</button>
        </form>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <svg
            className="icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/category" onClick={toggleMenu}>
            Category
          </Link>
          <Link href="/aboutUs" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
