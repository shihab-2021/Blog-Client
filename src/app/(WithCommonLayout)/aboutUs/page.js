import AuthorList from "@/components/aboutUs/AuthorList";
import HeroSection from "@/components/aboutUs/HeroSection";
import JoinNow from "@/components/aboutUs/JoinNow";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AuthorList />
      <JoinNow />
    </div>
  );
};

export default page;
