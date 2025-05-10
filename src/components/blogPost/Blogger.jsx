"use client";
import { MessageSquareHeart, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  useAddDislikeMutation,
  useAddLikeMutation,
} from "@/redux/features/blog/blogApi";
import { toast } from "sonner";

const Blogger = ({ headerData }) => {
  const [addLike, { isLoading: isLoadingLike }] = useAddLikeMutation();
  const [addDislike, { isLoading: isLoadingDislike }] = useAddDislikeMutation();
  const createdAt = new Date(headerData?.createdAt);

  const handleAddLike = async () => {
    try {
      const res = await addLike(headerData?.blogId);
      if (res?.data?.success) {
        headerData.refetchBlog();
        toast.success("Like successfully added!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleAddDislike = async () => {
    try {
      const res = await addDislike(headerData?.blogId);
      if (res?.data?.success) {
        headerData.refetchBlog();
        toast.success("Dislike successfully added!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-[936px] mx-auto mt-32 mb-4 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md animate-slideUp">
        <img
          src={headerData?.avatar || "/Resources/blogPost/Author.png"}
          alt="Author Avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-gray-300 mb-4"
        />
        <h2 className="font-sen font-bold text-xl sm:text-2xl text-purple-600 mb-2">
          {headerData?.authorName}
        </h2>
        <h5 className="font-inter text-gray-500 text-base mb-4">
          Posted on {createdAt?.toUTCString().slice(0, -12)}
        </h5>
        <h1 className="font-sen font-extrabold text-3xl sm:text-4xl text-gray-900 mb-6">
          {headerData?.title}
        </h1>
        <img
          src="/Resources/author/Line.png"
          alt="Line"
          className="w-full h-auto mb-6"
        />
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={handleAddLike}
          className={`flex items-center gap-2 text-green-600 bg-gray-100 px-3 py-2 rounded-full hover:bg-green-100 hover:scale-110 transition-all duration-300 ${
            isLoadingLike ? "animate-pulse" : ""
          } cursor-pointer`}
          disabled={isLoadingLike}
        >
          <ThumbsUp size={20} /> <span>{headerData?.totalLike}</span>
        </button>
        <button
          onClick={handleAddDislike}
          className={`flex items-center gap-2 text-red-500 bg-gray-100 px-3 py-2 rounded-full hover:bg-red-100 hover:scale-110 transition-all duration-300 ${
            isLoadingDislike ? "animate-pulse" : ""
          } cursor-pointer`}
          disabled={isLoadingDislike}
        >
          <ThumbsDown size={20} /> <span>{headerData?.totalDislike}</span>
        </button>
        <div className="flex items-center gap-2 text-blue-600 bg-gray-100 px-3 py-2 rounded-full hover:bg-blue-100 hover:scale-110 transition-all duration-300">
          <MessageSquareHeart size={20} />{" "}
          <span>{headerData?.totalComment}</span>
        </div>
      </div>
    </div>
  );
};

export default Blogger;
