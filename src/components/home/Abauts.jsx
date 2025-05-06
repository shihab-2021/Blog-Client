import React from "react";

function Abauts() {
  return (
    <section className="px-4 p-5 py-10 md:px-20 max-w-7xl mx-auto">
      <div className="flex  ml-30">
        <div className="w-200 h-2 bg-amber-300 p-2"></div>
        <div className="w-80 h-2 bg-purple-900 p-2"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-4 md:p-10 max-w-7xl mx-auto bg-purple-100 ">
        {/* ABOUT US */}
        <div className="flex-1">
          <p className="mb-8 text-xs tracking-widest  uppercase">About Us</p>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            We are a community of content writers who share their learnings
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="inline-block mt-2 text-purple-500 font-semibold hover:underline"
          >
            Read More →
          </a>
        </div>

        {/* OUR MISSION */}
        <div className="flex-1">
          <p className="mb-8 text-xs tracking-widest  uppercase">Our Mission</p>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="text-gray-600 leading-relaxed">
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

export default Abauts;
