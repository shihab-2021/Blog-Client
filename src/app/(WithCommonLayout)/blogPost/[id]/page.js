"use client";
import JoinNow from "@/components/aboutUs/JoinNow";
import Blogger from "@/components/blogPost/Blogger";
import Hero from "@/components/blogPost/Hero";
import Loading from "@/components/shared/Loading";
import { useGetSingleBlogDetailsQuery } from "@/redux/features/blog/blogApi";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }) => {
  const [blogId, setBlogId] = useState("");
  const {
    data: blogInfo,
    refetch: refetchBlog,
    isLoading: loadingBlog,
  } = useGetSingleBlogDetailsQuery(blogId, {
    skip: !blogId,
    refetchOnReconnect: true,
    refetch: true,
  });

  useEffect(() => {
    (async () => {
      const { id } = await params;
      setBlogId(id);
    })();
  }, [params]);
  return (
    <div className="font-sansita">
      {loadingBlog ? (
        <Loading />
      ) : (
        <>
          <Blogger
            headerData={{
              avatar: blogInfo?.data?.author?.avatar,
              authorName: blogInfo?.data?.author?.name,
              createdAt: blogInfo?.data?.createdAt,
              title: blogInfo?.data?.title,
              totalComment: blogInfo?.data?.comment?.length,
              totalLike: blogInfo?.data?.like?.length,
              totalDislike: blogInfo?.data?.dislike?.length,
              blogId: blogInfo?.data?._id,
              refetchBlog: refetchBlog,
            }}
          />
          <Hero
            blogData={{
              thumbnail: blogInfo?.data?.thumbnail,
              content: blogInfo?.data?.content,
              blogId: blogInfo?.data?._id,
              comments: blogInfo?.data?.comment,
            }}
          />
        </>
      )}
      {/* <ReadNext /> */}
      <JoinNow />
    </div>
  );
};

export default BlogDetails;
