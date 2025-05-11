"use client";

import React, { useRef, useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import {
  useGetSingleBlogDetailsQuery,
  useUpdateBlogMutation,
} from "@/redux/features/blog/blogApi"; // Make sure this exists
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EditBlogForm = ({ params }) => {
  const editor = useRef(null);
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const [blogId, setBlogId] = useState("");
  const { data: blog, refetch: refetchBlog } = useGetSingleBlogDetailsQuery(
    blogId,
    {
      skip: !blogId,
      refetchOnReconnect: true,
    }
  );
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState(blog?.thumbnail || "");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { id } = await params;
      setBlogId(id);
    })();
  }, [params]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    thumbnail: "",
    tags: "",
    isPublic: true,
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog?.data?.title || "",
        category: blog?.data?.category || "",
        content: blog?.data?.content || "",
        thumbnail: blog?.data?.thumbnail || "",
        tags: blog?.data?.tags?.join(", ") || "",
        isPublic: blog?.data?.isPublic ?? true,
      });
      setImage(blog?.data?.thumbnail || "");
    }
  }, [blog]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (newContent) => {
    setFormData((prev) => ({ ...prev, content: newContent }));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    setImageLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvszolotz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const value = file.secure_url;
    setFormData((prev) => ({ ...prev, thumbnail: value }));
    setImage(value);
    setImageLoading(false);
  };

  const dragOver = (e) => e.preventDefault();
  const dragEnter = (e) => e.preventDefault();
  const dragLeave = (e) => e.preventDefault();

  const imageFileDrop = async (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ml_default");
    setImageLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvszolotz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const value = file.secure_url;
    setFormData((prev) => ({ ...prev, thumbnail: value }));
    setImage(value);
    setImageLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const result = await updateBlog({
        id: blog?.data?._id,
        data: updatedBlog,
      }).unwrap();

      if (result?.success) {
        toast.success("Blog updated successfully!");
        router.push(`/blogPost/${blog?.data?._id}`);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="py-24 bg-white text-black font-sansita">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-center">Edit Blog</h2>

        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          >
            <option className="hidden">Select Category</option>
            <option>Creative</option>
            <option>Inspiration</option>
            <option>Lifestyle</option>
            <option>News</option>
            <option>Photography</option>
            <option>Skill</option>
            <option>Tourist Tours</option>
            <option>Trending</option>
            <option>Education</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Thumbnail Image</label>
          <div
            className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={imageFileDrop}
          >
            {imageLoading ? (
              <div>
                <img
                  className="mx-auto animate-ping"
                  style={{ height: "70px", width: "70px" }}
                  src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                  alt=""
                />
                <p className="text-xl text-gray-400">Loading ...</p>
              </div>
            ) : (
              <div>
                <img
                  className="mx-auto animate-pulse"
                  style={{ height: "70px", width: "70px" }}
                  src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                  alt=""
                />
                <p className="text-xl text-gray-400">
                  Drag & Drop your thumbnail image
                </p>
              </div>
            )}
            <p className="py-4">
              <label>
                <span className="rounded-lg bg-gray-400 px-3 py-3 font-semibold text-white cursor-pointer">
                  Upload Thumbnail
                </span>
                <input
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  onChange={uploadImage}
                />
              </label>
            </p>
          </div>
          {image && (
            <img
              className="mt-4 mx-auto"
              style={{ maxWidth: "100%" }}
              src={image}
              alt="Current Thumbnail"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Blog Content</label>
          <JoditEditor
            ref={editor}
            value={formData.content}
            tabIndex={1}
            onBlur={handleContentChange}
          />
        </div>

        <button
          type="submit"
          className="bg-[#4b5563] hover:bg-[#374151] text-white px-6 py-2 rounded cursor-pointer"
        >
          {isLoading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default EditBlogForm;
