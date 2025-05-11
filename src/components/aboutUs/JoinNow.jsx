import Link from "next/link";

const JoinNow = () => {
  return (
    <div className="max-w-[900px] w-full mx-auto flex flex-col items-center justify-center gap-6 py-12 px-4 sm:px-6 lg:px-8 my-20 sm:my-24 lg:my-32 font-sansita">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center">
        Join our team to be a part of our story
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center leading-relaxed max-w-3xl">
        For fans of blogs and documentation, this website will be a significant
        and engaging resource. And also the extra features will be very helpful
        for all stages of people. People from any stage can use this platform
        with proper benefits.
      </p>
      <Link
        href={"/addBlog"}
        className="px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-semibold text-base sm:text-lg rounded-md shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95"
      >
        Join Now
      </Link>
    </div>
  );
};

export default JoinNow;
