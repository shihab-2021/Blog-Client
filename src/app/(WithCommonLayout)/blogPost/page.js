import JoinNow from "@/components/aboutUs/JoinNow";
import BlogPost from "@/components/blogPost/BlogPost";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <JoinNow />
      <Footer />
    </div>
  );
};

export default page;
