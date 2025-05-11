"use client";
import {
  useAddCommentMutation,
  useGetBlogCommentsQuery,
  useSuspendCommentMutation,
} from "@/redux/features/blog/blogApi";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ToggleLeft, ToggleRight } from "lucide-react";
import { useSelector } from "react-redux";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useProfileQuery } from "@/redux/features/auth/authApi";

const Hero = ({ blogData }) => {
  const [commentText, setCommentText] = useState("");
  const [addComment, { isLoading }] = useAddCommentMutation();
  const [suspendComment, { isLoading: loadingSuspendComment }] =
    useSuspendCommentMutation();
  const { data: comments, refetch: commentRefetch } = useGetBlogCommentsQuery(
    blogData?.blogId,
    {
      skip: !blogData?.blogId,
      refetchOnReconnect: true,
    }
  );
  const token = useSelector(useCurrentToken);
  const { data: profile } = useProfileQuery(token);

  const handleCommentSubmit = async () => {
    try {
      const commentData = { comment: commentText, blogId: blogData?.blogId };
      const res = await addComment(commentData);
      if (res?.data?.success) {
        commentRefetch();
        setCommentText("");
        toast.success("Comment successfully added!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleSuspendComment = async (blogId, commentId) => {
    console.log(commentId);
    try {
      const res = await suspendComment({ blogId, commentId });
      if (res?.data?.success) {
        commentRefetch();
        toast.success("Comment suspend updated!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  console.log(comments?.data);

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <img
          src={blogData?.thumbnail || "/Resources/blogPost/Hero.png"}
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-xl max-w-[1700px] mx-auto mt-12"
        />
        <img
          src="/Resources/author/Line.png"
          alt="Line"
          className="w-full h-auto mt-6"
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-7 animate-slideUp mt-4">
        <div
          className="prose prose-lg prose-gray max-w-none font-sansita"
          dangerouslySetInnerHTML={{ __html: blogData?.content }}
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 animate-slideUp">
        <div className="my-6">
          <h1 className="font-sen font-bold text-2xl md:text-3xl text-gray-900 mb-4">
            Your Comment:
          </h1>
          <textarea
            placeholder="Write a comment"
            className="w-full border border-gray-300 rounded-lg p-4 mb-4 resize-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            rows={4}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-amber-500 text-white font-sen font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 active:scale-95 transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Comment"}
          </button>
        </div>
        <div>
          {comments?.data?.map((comment, index) => {
            const formattedTime = new Date(
              comment?.createdAt
            ).toLocaleTimeString();
            const formattedDate = new Date(
              comment?.createdAt
            ).toLocaleDateString();
            return (
              <div
                key={index}
                className="my-6 flex flex-col sm:flex-row gap-4 comment-section"
              >
                <Image
                  width={40}
                  height={40}
                  alt="commenter image"
                  src={
                    comment?.userId?.avatar ||
                    "https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"
                  }
                  className="rounded-full w-10 h-10 object-cover border border-gray-300"
                />
                <div className="flex-1">
                  <h1 className="font-sen font-bold text-xl text-gray-900">
                    {comment?.userId?.name || "Mike Alan"}
                  </h1>
                  <small className="font-inter text-gray-500 text-sm">
                    {formattedTime || "03:07 PM"} ~{" "}
                    {formattedDate || "5/4/2025"}
                  </small>
                  <p className="py-4 text-gray-600 font-inter">
                    {comment?.comment || "Very Nice try it"}
                  </p>
                  {profile?.data?.role === "admin" && (
                    <button
                      onClick={() =>
                        handleSuspendComment(blogData?.blogId, comment?._id)
                      }
                      className={`flex items-center gap-1 cursor-pointer mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
                        comment?.isSuspended
                          ? "focus:ring-green-700 bg-green-100 text-green-700 hover:bg-green-200"
                          : "focus:ring-red-700 bg-red-100 text-red-700 hover:bg-red-200"
                      } hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transition-all duration-300 cursor-pointer`}
                    >
                      {comment?.isSuspended ? (
                        <>
                          <ToggleRight size={25} className="text-green-500" />
                          Unsuspend
                        </>
                      ) : (
                        <>
                          <ToggleLeft size={25} className="text-red-500" />
                          Suspend
                        </>
                      )}
                    </button>
                  )}
                  <hr className="border-gray-400 w-full mt-2" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
