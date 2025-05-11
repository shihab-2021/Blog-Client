"use client";

import Loading from "@/components/shared/Loading";
import {
  useGetAllBlogForAdminQuery,
  useSuspendBlogMutation,
} from "@/redux/features/blog/blogApi";

export default function ManageBlog() {
  const {
    data: blogs,
    isLoading: loadingBlog,
    refetch: blogRefetch,
  } = useGetAllBlogForAdminQuery({
    refetchOnReconnect: true,
  });
  const [suspendBlog] = useSuspendBlogMutation();
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-center text-2xl mb-3">Manage Blogs</h1>
      </div>
      <div>
        {loadingBlog && <Loading />}
        {blogs?.data?.length === 0 ? (
          <p className="text-gray-500">Not written any blogs yet.</p>
        ) : (
          blogs?.data?.map((blog) => (
            <BlogCard
              key={blog?._id}
              blog={blog}
              suspendBlog={suspendBlog}
              refetchUserBlogs={blogRefetch}
            />
          ))
        )}
      </div>
    </div>
  );
}

import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const BlogCard = ({ blog, suspendBlog, refetchUserBlogs }) => {
  const {
    _id,
    title,
    createdAt,
    like = [],
    dislike = [],
    comment = [],
    tags = [],
    isPublic,
  } = blog;

  const handleSuspend = async (id) => {
    const toastId = toast.loading("Suspending Blog....", { duration: 3000 });
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await suspendBlog(id).unwrap();
          refetchUserBlogs();
          toast.success(res.message, { id: toastId, duration: 2000 });
        } catch (err) {
          toast.error(err.data.message || "Something went wrong", {
            id: toastId,
            duration: 2000,
          });
        }
      }
    });
  };

  return (
    <div
      key={_id}
      className="bg-white rounded-2xl shadow-md overflow-hidden  w-full mb-4 border border-gray-100 relative"
    >
      <div className="p-4 space-y-3">
        <Link
          href={`/blogPost/${_id}`}
          className="text-xl font-semibold line-clamp-2"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-500">
          {new Date(createdAt).toDateString()}
        </p>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <ThumbsUp size={16} /> {like.length}
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown size={16} /> {dislike.length}
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} /> {comment.length}
          </div>{" "}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags
            .filter((tag) => tag.trim())
            .slice(0, 3)
            .map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          {tags.length > 3 && (
            <span className="text-xs text-gray-400">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => handleSuspend(_id)}
          className={`flex items-center gap-1 cursor-pointer mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
            !isPublic
              ? "focus:ring-green-700 bg-green-100 text-green-700 hover:bg-green-200"
              : "focus:ring-red-700 bg-red-100 text-red-700 hover:bg-red-200"
          } hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transition-all duration-300 cursor-pointer`}
        >
          {!isPublic ? (
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
      </div>
    </div>
  );
};
