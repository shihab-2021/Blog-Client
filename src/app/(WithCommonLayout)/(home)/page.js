/* eslint-disable @next/next/no-img-element */
import FeaturedPost from "@/components/home/FeaturedPost";
import Abauts from "@/components/home/Abauts";
import Catagory from "@/components/home/Catagory";
import Discover from "@/components/home/Discover";
import ListAuthors from "@/components/home/ListAuthors";
import Testimonials from "@/components/home/Testimonials";
import JoinOurTeam from "@/components/home/JoinOurTeam";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="header-section mt-10"
        style={{
          backgroundImage: "url('Hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-27 flex flex-col  justify-center h-screen">
          <p className="text-base md:text-xl font-light tracking-widest text-white mb-8">
            Posted on startup
          </p>
          <p className="text-4xl md:text-6xl font-semibold text-white mb-4">
            Step-by-step guide to
          </p>
          <p className="text-4xl md:text-6xl font-semibold text-white mb-4">
            great font pairs
          </p>
          <p className="text-base md:text-xl font-semibold text-white tracking-wider mb-4">
            By <span className="text-amber-400 tracking-wider">James West</span>{" "}
            | May 23, 2022
          </p>
          <p className="text-base md:text-xl font-semibold leading-loose text-white mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          </p>
          <p className="text-base md:text-xl font-semibold text-white mb-4"></p>

          <div className="mt-4">
            <a
              href="/blog"
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* end .... */}
      <div className="container mx-auto">
        <FeaturedPost />
        <Abauts />
        <Catagory />
        <Discover />
        <ListAuthors />
        <div className="container mx-auto m-10">
          <img src="/Logo-component.png" alt="img" className="w-full h-auto" />
        </div>
        <Testimonials />
        <JoinOurTeam />
      </div>
    </>
  );
}
