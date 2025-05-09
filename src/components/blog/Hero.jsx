import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-12 md:py-16 lg:py-20 mt-16 md:mt-20 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1700px] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 animate-slideUp">
          <p className="font-inter uppercase text-sm md:text-base tracking-widest text-purple-600 font-bold">
            Featured Post
          </p>
          <h2 className="font-sen font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight hover:text-purple-600 transition-all duration-300">
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className="font-inter text-gray-600 text-base md:text-lg">
            By <span className="text-amber-500 font-semibold">James West</span>{" "}
            | May 23, 2022
          </p>
          <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <Link href="#">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 text-base md:text-lg rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300">
              Read More
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 animate-scaleIn">
          <img
            src="/blogsH.png"
            alt="Featured Post"
            className="w-full h-auto shadow-xl hover:scale-[1.001] hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
