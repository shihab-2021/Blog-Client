"use client";
import { MessageSquareHeart, ThumbsDown, ThumbsUp } from "lucide-react";
import "./BlogPost.css";
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
    <div>
      <div className="author-info">
        <img
          src={headerData?.avatar || "/Resources/blogPost/Author.png"}
          alt="Author Avatar"
          className="avatar"
        />
        <h2>{headerData?.authorName}</h2>
        <h5>Posted on {createdAt?.toUTCString().slice(0, -12)}</h5>
        <h1>{headerData?.title}</h1>
        <img src="\Resources\author\Line.png" alt="Line" className="line" />
      </div>
      <div className="flex justify-center items-center gap-6 mt-5">
        <button
          onClick={handleAddLike}
          className={`flex items-center gap-1 text-green-600 hover:scale-125 cursor-pointer ${
            isLoadingLike && "animate-pulse"
          }`}
          disabled={isLoadingLike}
        >
          <ThumbsUp /> <span>{headerData?.totalLike}</span>
        </button>

        <button
          onClick={handleAddDislike}
          className="flex items-center gap-1 text-red-500 hover:scale-125 cursor-pointer"
        >
          <ThumbsDown /> <span>{headerData?.totalDislike}</span>
        </button>

        <div className="flex items-center gap-1 text-blue-600">
          <MessageSquareHeart /> <span>{headerData?.totalComment}</span>
        </div>
      </div>
    </div>
  );
};

export default Blogger;
