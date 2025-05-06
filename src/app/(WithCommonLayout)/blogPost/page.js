import JoinNow from "@/components/aboutUs/JoinNow";
import Blogger from "@/components/blogPost/Blogger";
import Hero from "@/components/blogPost/Hero";
import ReadNext from "@/components/blogPost/ReadNext";

const page = () => {
  return (
    <div>
      <Blogger />
      <Hero />
      <ReadNext />
      <JoinNow />
    </div>
  );
};

export default page;
