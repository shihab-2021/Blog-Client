import AuthorList from "@/components/aboutUs/AuthorList";
import HeroSection from "@/components/aboutUs/HeroSection";
import JoinNow from "@/components/aboutUs/JoinNow";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AuthorList />
      <JoinNow />
      <Footer />
    </div>
  );
};

export default page;
