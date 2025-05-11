"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import {
  LayoutDashboardIcon,
  LogIn,
  LogOutIcon,
  UserCircle2Icon,
  UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const token = useSelector(useCurrentToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const getCurrentProfile = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/auth/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setProfile(data);
      // return data?.data;
    } catch (error) {
      return Error(error.message);
    }
  };

  useEffect(() => {
    getCurrentProfile();
  }, [token]);

  console.log(profile, token);

  return (
    <header className="fixed top-0 w-full bg-gray-800 z-50 shadow-md font-sansita">
      <nav className="container mx-auto flex items-center justify-between flex-wrap py-2 px-4">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link
            href="/"
            className="font-bold text-2xl font-agbalumo text-amber-400"
          >
            Blog<span className="text-purple-400">Nest</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`w-full lg:w-auto lg:flex  ${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row items-center bg-gray-800 lg:bg-transparent mt-4 lg:mt-0`}
        >
          <Link href="/" className="text-white px-4 py-2 hover:text-gray-300">
            Home
          </Link>
          <Link
            href="/blog"
            className="text-white px-4 py-2 hover:text-gray-300"
          >
            Blog
          </Link>
          <Link
            href="/addBlog"
            className="text-white px-4 py-2 hover:text-gray-300"
          >
            Add Blog
          </Link>
          <Link
            href="/aboutUs"
            className="text-white px-4 py-2 hover:text-gray-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white px-4 py-2 hover:text-gray-300"
          >
            Contact Us
          </Link>
          {isOpen && (
            <>
              <Link
                href={
                  profile?.data?.role === "admin"
                    ? "/dashboard/admin"
                    : `/dashboard/profile/${profile?.data?._id}`
                }
                className="text-white px-4 py-2 hover:text-gray-300"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  dispatch(logout());
                  router.push("/");
                }}
                className="text-white px-4 py-2 hover:text-gray-300"
              >
                Sign out
              </button>
            </>
          )}

          {token ? (
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center gap-2 text-white px-4 py-2 focus:outline-none cursor-pointer"
              >
                {profile?.data?.avatar ? (
                  <Image
                    src={profile?.data?.avatar}
                    alt="profile"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border w-10 h-10"
                  />
                ) : (
                  <UserCircle2Icon className="w-8 h-8 text-white" />
                )}
                <span>{profile?.data?.name}</span>
              </button>

              {isProfileOpen && !isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href={
                      profile?.data?.role === "admin"
                        ? "/dashboard/admin"
                        : `/dashboard/profile/${profile?.data?._id}`
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    <LayoutDashboardIcon className="w-4 h-4" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(logout());
                      router.push("/");
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4 px-4 py-2">
              <Link
                href="/login"
                className="flex items-center gap-1 text-white hover:text-gray-300"
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1 px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white transition"
              >
                <UserPlus className="w-5 h-5" />
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>

        {/* Search bar */}

        {/* <form
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
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg"
          >
            Search
          </button>
        </form> */}
      </nav>
    </header>
  );
};

export default Navbar;
