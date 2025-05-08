"use client";
import {
  useAddCommentMutation,
  useGetBlogCommentsQuery,
} from "@/redux/features/blog/blogApi";
import "./BlogPost.css";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

const Hero = ({ blogData }) => {
  const [comment, setComment] = useState("");
  const [addComment, { isLoading }] = useAddCommentMutation();
  const { data: comments, refetch: commentRefetch } = useGetBlogCommentsQuery(
    blogData?.blogId,
    {
      skip: !blogData?.blogId,
      refetchOnReconnect: true,
    }
  );

  const handleCommentSubmit = async () => {
    try {
      const commentData = { comment: comment, blogId: blogData?.blogId };
      const res = await addComment(commentData);
      if (res?.data?.success) {
        // toast.success("Comment successfully added!");
        commentRefetch();
        setComment("");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <section className="hero">
        {/* <div className="category">Startup</div> */}
        <img
          src={blogData?.thumbnail || "/Resources/blogPost/Hero.png"}
          alt="Hero Image"
          className="hero-image"
        />
        <img src="\Resources\author\Line.png" alt="Line" className="line" />
      </section>

      <section className="content">
        <div dangerouslySetInnerHTML={{ __html: blogData?.content }} />
      </section>

      <section className="content">
        <div className="my-4">
          <h1 className="text-2xl mb-2">Your Comment:</h1>
          <form>
            <textarea
              placeholder="Write a comment"
              className="w-full border rounded p-2 mb-2 resize-none comment-textarea"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
          <button
            onClick={() => handleCommentSubmit()}
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400 comment-submit"
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
              <div key={index}>
                <div className="my-4 flex flex-col sm:flex-row comment-section">
                  <div>
                    <Image
                      width={200}
                      height={200}
                      alt="commenter image"
                      src={
                        comment?.userId?.avatar ||
                        "https://i.ibb.co/DMYmT3x/Generic-Profile.jpg"
                      }
                      className="rounded-full w-10 h-10 object-cover dark:border-white border border-black comment-avatar"
                    />
                  </div>
                  <div className="pl-4 comment-data">
                    <h1 className="text-2xl font-bold">
                      {comment?.userId?.name || "Mike Alan"}
                    </h1>
                    <small className="font-sans">
                      {formattedTime || "03:07 PM"} ~{" "}
                      {formattedDate || "5/4/2025"}
                    </small>
                    <p className="py-4">
                      {comment?.comment || "Very Nice try it"}
                    </p>
                    <hr />
                  </div>
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
