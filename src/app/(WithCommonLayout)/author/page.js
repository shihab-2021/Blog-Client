import HeroSection from "@/components/author/HeroSection";
import Posts from "@/components/author/Posts";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Posts />
    </div>
  );
};

export default page;
