import Link from "next/link";
import Catagory from "./homePageCom/Catagory";

const Header = () => {
  return (
    <header className="fixed top-0 w-full shadow-lg p-4 bg-gray-900 z-50">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link href="#" className="text-2xl font-bold text-white">
          LOGO
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-500">
            Home
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-500">
            Blog
          </Link>
          <Link href="/category" className="text-white hover:text-gray-500">
            Catagory
          </Link>

          <Link href="/about" className="text-white hover:text-gray-500">
            About Us
          </Link>

          <Link href="/contact" className="text-white hover:text-gray-500">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Search and Cart */}
      <form
        className="container mx-auto mt-4 flex items-center justify-center space-x-4"
        role="search"
      >
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="w-1/2 p-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-700 bg-gray-200 text-black"
        />
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
