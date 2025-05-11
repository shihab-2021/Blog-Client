import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 pt-12 md:pt-16 lg:pt-20  mx-auto px-4 sm:px-6 lg:px-8 font-sansita pb-8">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 container mx-auto">
        <div className="w-full flex flex-col animate-slideUp">
          <p className="font-inter uppercase text-sm md:text-base tracking-widest text-purple-600 font-bold mt-4 mb-1">
            Featured Post
          </p>
          <h2 className="font-sen font-bold text-xl sm:text-2xl md:text-4xl  text-gray-900 leading-tight hover:text-purple-600 transition-all duration-300 mb-2">
            Discover Stories That Inspire, Inform, and Engage
          </h2>

          <p className="font-inter text-gray-600 text-xs sm:text-sm leading-relaxed max-w-3xl mb-4">
            Dive into our featured post, handpicked from the community to bring
            you the most insightful, creative, and meaningful content.{" "}
            <span className="hidden md:block">
              {" "}
              Whether it's personal experiences, tutorials, or thought-provoking
              opinions — our featured blogs reflect the voice of real creators
              with something valuable to share.
            </span>
          </p>
          <Link href="/addBlog">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-sen font-semibold py-3 px-8 text-base md:text-lg rounded-md shadow-lg hover:from-amber-600 hover:to-yellow-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 cursor-pointer">
              Add Blog
            </button>
          </Link>
        </div>
        {/* <div className="w-full lg:w-1/2 animate-scaleIn">
          <img
            src="/blogsH.png"
            alt="Featured Post"
            className="w-full h-auto shadow-xl hover:scale-[1.001] hover:shadow-2xl transition-all duration-300"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
