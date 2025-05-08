const UserBlogs = ({
  blogs,
  loading,
  isAdmin,
  isAuthor,
  deleteBlog,
  refetchUserBlogs,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Blogs</h1>
      {loading && <Loading />}
      {blogs?.length === 0 ? (
        <p className="text-gray-500">Not written any blogs yet.</p>
      ) : (
        blogs?.map((blog) => (
          <BlogCard
            key={blog?._id}
            blog={blog}
            isAdmin={isAdmin}
            isAuthor={isAuthor}
            deleteBlog={deleteBlog}
            refetchUserBlogs={refetchUserBlogs}
          />
        ))
      )}
    </div>
  );
};

export default UserBlogs;

import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  ToggleLeft,
  ToggleRight,
  FileEdit,
  Trash2,
} from "lucide-react";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const BlogCard = ({
  blog,
  isAdmin,
  onToggleSuspend,
  isAuthor,
  deleteBlog,
  refetchUserBlogs,
}) => {
  const {
    _id,
    title,
    createdAt,
    like = [],
    dislike = [],
    comment = [],
    tags = [],
    isDeleted,
  } = blog;

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting Blog....", { duration: 3000 });
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await deleteBlog(id).unwrap();
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
        <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
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

        {isAdmin && (
          <button
            onClick={() => onToggleSuspend(_id, !isDeleted)}
            className={`flex items-center gap-1 mt-2 px-4 py-2 rounded-lg text-sm font-medium ${
              isDeleted
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-red-100 text-red-700 hover:bg-red-200"
            }`}
          >
            {isDeleted ? (
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
        {isAuthor && (
          <div className="absolute top-4 right-4 min-w-16 flex gap-2">
            <Link
              href={`/editBlog/${_id}`}
              className=" bg-gray-100 text-[#FFBC00] hover:text-amber-600 cursor-pointer transition p-2 rounded-md"
              title="Edit Blog"
            >
              <FileEdit size={20} />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className=" bg-gray-100 text-red-400 hover:text-red-600 cursor-pointer transition p-2 rounded-md"
              title="Delete Blog"
            >
              <Trash2 size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
