import React from "react";

function Hero() {
  return (
    <>
      <div className="my-29 bg-[url('/Resources/home/Hero.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="mx-27 flex flex-col justify-center h-screen">
          <p className="mb-8 text-base font-light tracking-wider text-white md:text-xl">
            Create Your Own Blogging World
          </p>
          <p className="mb-4 text-2xl font-semibold text-white md:text-4xl">
          A Complete Blogging Platform From Writing to Full Control
          </p>
        
          
          <p className="mb-4 text-base font-semibold leading-loose text-white md:text-xl">
         This blog application is designed to provide users with a seamless, secure, and interactive writing experience. You can create, edit, and publish your own blog posts, read others' content, and engage through comments. As an admin, you’ll have full control over user management, content moderation, and site settings. Built with a mobile-responsive layout, strong security features, and SEO-friendly structure — this platform ensures your blog is powerful, user-friendly, and efficient from every angle.
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
