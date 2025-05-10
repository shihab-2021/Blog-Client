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
            We Are a Community of Passionate Bloggers and Thought-Sharers
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
           We are a dynamic community of content creators, writers, and readers who believe in the power of sharing knowledge and stories. Our platform empowers individuals to express their thoughts, experiences, and expertise through blogs, fostering an open and engaging digital environment. From personal stories to expert insights — we create space for voices that matter.
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
           Empowering Creators to Publish and Inspire Through Meaningful Content
          </h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
           Our mission is to build a user-friendly and secure blogging platform where creativity meets functionality. We aim to help writers across the globe publish quality content, connect with their audience, and grow their personal brand. With built-in tools for interaction, moderation, and management — we strive to make blogging an impactful and enjoyable experience for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
