"use client";

import React from "react";
import Link from "next/link";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer font-sansita ">
      <div className="container mx-auto">
        <nav className="footer-nav">
          <Link
            href="/"
            className="font-bold text-2xl font-agbalumo text-amber-400"
          >
            Blog<span className="text-purple-400">Nest</span>
          </Link>

          <div className="footer-links">
            <Link href="/" className="footer-link">
              Home
            </Link>
            <Link href="/blog" className="footer-link">
              Blog
            </Link>
            <Link href="/addBlog" className="footer-link">
              Add Blog
            </Link>
            <Link href="/aboutUs" className="footer-link">
              About Us
            </Link>
            <Link href="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="newsletter-section">
          <div className="newsletter-content">
            <p className="newsletter-text">
              Subscribe to our newsletter to get the latest updates and news
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="contact-info">
            <p className="contact-text">Dhaka, 118 2561, Bangladesh</p>
            <p className="contact-text">asadulcb45@gmail.com || 01715984985</p>
            <p className="contact-text">Copyright © 2025</p>
          </div>

          <div className="social-icons">
            <img
              src="/Negative1.png"
              alt="Social Icon 1"
              className="social-icon"
            />
            <img
              src="/Negative.png"
              alt="Social Icon 2"
              className="social-icon"
            />
            <img
              src="/Negative2.png"
              alt="Social Icon 3"
              className="social-icon"
            />
            <img
              src="/Negative3.png"
              alt="Social Icon 4"
              className="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
