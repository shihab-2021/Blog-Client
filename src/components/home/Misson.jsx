import React from "react";

function Mission() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-5 md:px-20 md:py-10">
      <div className="flex ml-30">
        <div className="w-[50rem] h-2 bg-amber-500 p-2"></div>
        <div className="w-80 h-2 bg-purple-900 p-2"></div>
      </div>

      <div className="flex flex-col gap-10 p-4 bg-indigo-100 text-purple-900 md:flex-row md:p-10">
        {/* ABOUT US */}
        <div className="flex-1">
          <p className="mb-8 text-xs uppercase tracking-widest">About Us</p>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            We are a community of content writers who share their learnings
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="inline-block mt-2 font-semibold text-purple-900 hover:underline"
          >
            Read More →
          </a>
        </div>

        {/* OUR MISSION */}
        <div className="flex-1">
          <p className="mb-8 text-xs uppercase tracking-widest">Our Mission</p>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
