

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Discover() {
  return (
    <div className="relative w-full py-10">
      {/* Responsive Image */}
      <Image
        src="/discover.png"
        alt="Discover"
        width={800}
        height={400}
        className=" w-full h-auto object-cover"
      />

      {/* Overlay text (desktop) / Static text (mobile) */}
      <div className="absolute bottom-10 right-0  md:right-0 md:w-1/2 bg-neutral-50/90 shadow-md p-4 w-full static md:absolute ">
        <p className="mb-2 text-xs tracking-widest uppercase">Why we started</p>

        <p className="text-xl md:text-4xl font-bold mb-4">
          It started out as a simple idea and evolved into our passion
        </p>

        <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        <Link
          href="#"
          className="inline-block bg-amber-500 text-white py-3 px-4 rounded hover:bg-amber-600 transition"
        >
          Discover our story
        </Link>
      </div>
    </div>
  );
}

export default Discover;
