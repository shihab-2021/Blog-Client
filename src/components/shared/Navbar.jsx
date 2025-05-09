"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useProfileQuery } from "@/redux/features/auth/authApi";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import {
  LayoutDashboardIcon,
  LogIn,
  LogOutIcon,
  UserCircle2Icon,
  UserPlus,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(useCurrentToken);
  const { data: profile } = useProfileQuery(token);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

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
          {token ? (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 focus:outline-none cursor-pointer"
              >
                {profile?.data?.profilePhoto ? (
                  <Image
                    src={profile?.data?.profilePhoto}
                    alt="image"
                    className="h-10 w-10 rounded-full object-cover border"
                    width={50}
                    height={50}
                  />
                ) : (
                  <UserCircle2Icon className="h-10 w-10 text-white" />
                )}
                <span className="text-white">{profile?.data?.name}</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href={
                      profile?.data?.role === "admin"
                        ? "/dashboard/admin"
                        : `/dashboard/profile/${profile?.data?._id}`
                    }
                    className="flex items-center gap-1 w-full px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    <LayoutDashboardIcon className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      router.push("/");
                    }}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-white hover:text-gray-400 hover:bg-gray-700 gap-1"
                  >
                    <LogOutIcon className="h-5 w-5" />
                    <span>Sign out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="flex items-center space-x-1 text-white hover:text-gray-400"
              >
                <LogIn />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <UserPlus />
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
