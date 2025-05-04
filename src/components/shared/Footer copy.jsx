
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-900 py-10 px-6">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link href="#" className="text-2xl font-bold text-white">
          LOGO
        </Link>

        <div className="space-x-6">
          <Link href="/" className="text-white hover:text-gray-500">
            Home
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-500">
            Blog
          </Link>
          <Link href="/about" className="text-white hover:text-gray-500">
            About Us
          </Link>

          <Link href="/contact" className="text-white hover:text-gray-500">
            Contact Us
          </Link>
        </div>
      </nav>
      <div className="container mx-auto mt-10 ">
        <div className="bg-gray-800 py-15 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-white text-center lg:text-left text-lg font-semibold">
              Subscribe to our newsletter to get the latest updates and news
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className=" text-white border border-gray-50 p-3 rounded w-full focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex items-center justify-between">
        <div>
          <p className=" text-white text-sm">Dhaka , 118 2561, Bangladesh</p>
          <p className=" text-white text-sm">
            asadulcb45@gmail.com || 01715984985
          </p>
          <p className=" text-white text-sm">Copyright &copy; 2025</p>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="/Negative1.png"
            alt="icon"
            className="w-6 h-6 bg-white p-1 rounded"
          />
          <img
            src="/Negative.png"
            alt="icon"
            className="w-6 h-6 bg-white p-1 rounded"
          />
          <img
            src="/Negative2.png"
            alt="icon"
            className="w-6 h-6 bg-white p-1 rounded"
          />
          <img
            src="/Negative3.png"
            alt="icon"
            className="w-6 h-6 bg-white p-1 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
