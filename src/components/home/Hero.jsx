import React from "react";

function Hero() {
  return (
    <>
      <div className="mt-10 bg-[url('/Resources/home/Hero.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="mx-27 flex flex-col justify-center h-screen">
          <p className="mb-8 text-base font-light tracking-wider text-white md:text-xl">
            Posted on startup
          </p>
          <p className="mb-4 text-4xl font-semibold text-white md:text-6xl">
            Step-by-step guide to
          </p>
          <p className="mb-4 text-4xl font-semibold text-white md:text-6xl">
            great font pairs
          </p>
          <p className="mb-4 text-base font-semibold tracking-tight text-white md:text-xl">
            By <span className="text-amber-400">James West</span> | May 23, 2022
          </p>
          <p className="mb-4 text-base font-semibold leading-loose text-white md:text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </p>
          <div>
            <a
              href="/blog"
              className="inline-block mt-4 px-4 py-3 bg-amber-400 text-white font-bold rounded hover:bg-amber-500 transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
