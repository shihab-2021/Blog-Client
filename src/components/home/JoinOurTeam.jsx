import Link from "next/link";
import React from "react";

function JoinOurTeam() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 py-10 max-w-7xl mx-auto mt-10">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold mb-4">
          Join our team to be a part of our story
        </p>
        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Link href="#/join-our-team">
          <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded transition duration-300">
            Join Our Team
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JoinOurTeam;
