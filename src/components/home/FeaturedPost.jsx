"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogApi";
import Loading from "../shared/Loading";

const formateDate = (date) => {
  const formate = new Date(date);
  return formate?.toUTCString()?.slice(0, -12);
};

// Reusable Post Card
const PostCard = ({ author, createdAt, title, _id }) => (
  <div className="border-b border-gray-200 pb-4">
    <p className="text-sm text-gray-500">
      By <span className="text-blue-900">{author?.name}</span> |{" "}
      {formateDate(createdAt)}
    </p>
    <Link
      href={`/blogPost/${_id}`}
      className="mt-1 text-gray-800 animate-fadeIn"
    >
      {title}
    </Link>
  </div>
);

const FeaturedPost = () => {
  const {
    data: blogs,
    refetch: blogRefetch,
    isLoading: loadingBlog,
  } = useGetAllBlogQuery({
    refetchOnReconnect: true,
  });

  return (
    <>
      {loadingBlog && <Loading />}
      <div className="flex flex-col gap-10 p-4 container mx-auto md:flex-row font-sansita">
        {/* Featured Section */}
        {!loadingBlog && (
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-6 text-purple-900 animate-fadeIn md:text-4xl">
              Featured Post
            </h1>
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm text-purple-900">
              <Image
                src={blogs?.data[0]?.thumbnail || "/item-hom.png"}
                alt="Featured"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-gray-50">
                <p className="text-sm font-medium text-gray-500">
                  By{" "}
                  <span className="font-bold text-purple-900">
                    {blogs?.data[0]?.author?.name}
                  </span>{" "}
                  | {formateDate(blogs?.data[0]?.createdAt)}
                </p>
                <h2 className="mt-4 ml-6 text-xl font-semibold text-purple-900 animate-fadeIn md:text-2xl">
                  {blogs?.data[0]?.title}
                </h2>
                <div className="flex gap-8 font-inter text-gray-600 text-base animate-fadeInText mt-4 mb-8 ml-6  animate-fadeIn">
                  <p>Like: {blogs?.data[0]?.like?.length}</p>
                  <p>Comment: {blogs?.data[0]?.comment?.length}</p>
                </div>
                <Link
                  href={`/blogPost/${blogs?.data[0]?._id}`}
                  className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Posts Section */}
        {!loadingBlog && (
          <div className="w-full md:w-1/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900 animate-fadeIn md:text-3xl">
                All Posts
              </h2>
              <Link
                href="/blog"
                className="text-sm text-blue-900 hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {blogs?.data?.slice(1, 6)?.map((post) => (
                <PostCard key={post._id} {...post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeaturedPost;
