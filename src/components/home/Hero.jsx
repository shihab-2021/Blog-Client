import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className=" bg-[url('/Resources/home/Hero.png')] bg-cover bg-center bg-no-repeat bg-fixed font-sansita">
        <div className="container mx-auto p-4">
          <div className=" md:w-8/12 flex flex-col justify-center h-screen">
            <p className="mb-2 text-base font-light tracking-wider text-white md:text-xl">
              Grow up with us
            </p>
            <p className="mb-4 text-2xl font-semibold text-white md:text-4xl">
              Keep explore, keep taking knowledge, be happy
            </p>

            <p className="mb-4 text-sm lg:text-base leading-loose text-white md:text-md ">
              For fans of blogs and documentation, this website will be a
              significant and engaging resource. And also the extra features
              will be very helpful for all stages of people. People from any
              stage can use this platform with proper benefits.
            </p>
            <div>
              <Link
                href="/blog"
                className="inline-block mt-4 px-5 py-2.5 bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
