import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white min-h-[550px] flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
        {/* Left Hero - Author Image */}
        <div className="w-full lg:w-[300px] h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300">
          <img
            src="/Resources/author/author.png"
            alt="Author Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Hero - Text Content */}
        <div className="w-full lg:flex-1 bg-white p-6 sm:p-8 shadow-lg hover:-translate-y-1 transition-transform duration-300">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
            Hey there, I’m Andrew Jonhson and welcome to my Blog
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex lg:flex-col gap-4 lg:gap-6 absolute lg:static right-4 lg:right-auto top-1/2 lg:top-auto -translate-y-1/2 lg:translate-y-0 justify-center flex-wrap">
          {["Icon1.png", "Icon2.png", "Icon3.png", "Icon4.png"].map(
            (icon, index) => (
              <img
                key={index}
                src={`/Resources/author/${icon}`}
                alt="Social Icon"
                className="w-10 h-10 p-2 bg-white shadow-md hover:scale-110 hover:bg-yellow-200 transition-all duration-300 cursor-pointer"
              />
            )
          )}
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400"></div>
      </div>
    </section>
  );
};

export default HeroSection;
