"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
import { useCreateBlogMutation } from "@/redux/features/blog/blogApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const editor = useRef(null);
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const [imageLoading, setImageLoading] = useState(false);
  const [image, setImage] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    thumbnail: "",
    tags: "",
    isPublic: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContentChange = (newContent) => {
    setFormData({ ...formData, content: newContent });
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

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
    setFormData({ ...formData, thumbnail: value });

    setImage(file.secure_url);
    // setImage(files[0])
    // props.imgLink(file.secure_url);
    setImageLoading(false);
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
    setFormData({ ...formData, thumbnail: value });
    setImage(file.secure_url);
    setImageLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()), // convert to array
      };
      const result = await createBlog(blogData).unwrap();
      if (result?.success) {
        toast.success("Blog added successfully!");
        router.push(`/blogPost/${result?.data?._id}`);
      }
      // console.log("Submitted Blog Data:", blogData);
      // Handle form submit logic (API call etc.)
    } catch (error) {}
  };

  return (
    <div className="py-24 text-black font-sansita">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6 border border-gray-100"
      >
        <div className="text-center">
          <div className="font-sen font-semibold text-base uppercase tracking-wider text-purple-600 mb-4">
            Create New Blog
          </div>
          <h1 className="font-sen font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Hello! here is <span className="font-agbalumo">BlogNest</span>
          </h1>
          <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Shear your blog or documentation
          </p>
        </div>

        <div>
          <label className="block mb-1 font-bold">Title</label>
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
          <label className="block mb-1 font-bold">Category</label>
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
          {/* <input
            type="text"
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          /> */}
        </div>

        <div>
          <label className="block mb-1 font-bold">Thumbnail URL</label>

          <div className="">
            <div className="rounded-lg border-2 border-dotted border-gray-400 p-3 text-center">
              <label>
                <div
                  // className="mt-12 text-center"
                  onDragOver={dragOver}
                  onDragEnter={dragEnter}
                  onDragLeave={dragLeave}
                  onDrop={imageFileDrop}
                >
                  <div className="">
                    {imageLoading && (
                      <div>
                        <img
                          className="mx-auto animate-ping"
                          style={{ height: "70px", width: "70px" }}
                          src="https://i.ibb.co/gJLdW8G/cloud-upload-regular-240.png"
                          alt=""
                        />
                        <p className="text-xl text-gray-400">Loading ...</p>
                      </div>
                    )}
                    {!imageLoading && (
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
                      <span className="rounded-lg bg-gray-400 px-3 py-3 font-semibold  text-Docy-Dark dark:text-white">
                        Upload Thumbnail
                      </span>
                    </p>
                  </div>
                </div>
                <input
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  placeholder="upload"
                  onChange={uploadImage}
                />
              </label>
            </div>
            <small className=" text-red-600 ">Required*</small>
            {/* <FormHelperText sx={{ color: "red" }}>Required*</FormHelperText> */}
            <div>
              <div className="pt-4">
                <div>
                  {image && (
                    <img
                      className="mx-auto"
                      style={{ maxWidth: "100%" }}
                      src={image}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-bold">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-bold">Blog Content</label>
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
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
