import React from "react";

const PostBlog = () => {
  return (
    <div className="max-w-[900px] mx-auto mt-32 mb-20 p-10 bg-white shadow-lg rounded-lg animate-fadeIn md:p-6 sm:p-4 xs:p-2 xs:mt-16 xs:mb-4">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block font-inter font-medium text-base text-gray-800 mb-2 sm:text-sm xs:text-xs"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Please enter your blog or documentation title"
          className="w-full p-3.5 border border-gray-300 rounded-md font-inter text-base text-gray-800 focus:border-purple-700 focus:shadow-[0_0_8px_rgba(89,46,169,0.2)] focus:outline-none focus:scale-[1.01] transition-all sm:p-3 sm:text-sm xs:p-2 xs:text-xs"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="category"
          className="block font-inter font-medium text-base text-gray-800 mb-2 sm:text-sm xs:text-xs"
        >
          Category
        </label>
        <select
          id="category"
          className="w-full p-3.5 border border-gray-300 rounded-md font-inter text-base text-gray-800 focus:border-purple-700 focus:shadow-[0_0_8px_rgba(89,46,169,0.2)] focus:outline-none focus:scale-[1.01] transition-all bg-[url('data:image/svg+xml;utf8,<svg fill=%22%23232536%22 height=%2224%22 viewBox=%220 0 24 24%22 width=%2224%22 xmlns=%22http://www.w3.org/2000/svg%22><path d=%22M7 10l5 5 5-5z%22/></svg>')] bg-no-repeat bg-[right_10px_center] bg-white sm:p-3 sm:text-sm xs:p-2 xs:text-xs"
        >
          <option>Select Category</option>
        </select>
      </div>

      <div className="flex gap-6 mb-6 md:flex-col md:gap-4 xs:gap-2">
        <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all sm:p-4 xs:p-2">
          <p className="font-inter text-base text-gray-500 m-2 sm:text-sm xs:text-xs">
            Drag & Drop your thumbnail image
          </p>
          <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white font-inter font-medium text-base py-3 px-6 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:scale-105 active:scale-95 transition-all sm:py-2 sm:px-4 sm:text-sm xs:text-xs xs:px-3 xs:py-1.5">
            Upload Thumbnail
          </button>
          <span className="block mt-2 font-inter text-sm text-red-500 sm:text-xs xs:text-[0.6875rem]">
            Required*
          </span>
        </div>
      </div>

      <div className="mb-8">
        <p className="font-inter text-sm text-gray-500 mb-2 sm:text-xs xs:text-[0.6875rem]">
          Press comma or click the add button to create a tag
        </p>
        <input
          type="text"
          placeholder="Enter tags..."
          className="w-full p-3.5 border border-gray-300 rounded-md font-inter text-base text-gray-800 focus:border-purple-700 focus:shadow-[0_0_8px_rgba(89,46,169,0.2)] focus:outline-none focus:scale-[1.01] transition-all sm:p-3 sm:text-sm xs:p-2 xs:text-xs"
        />
      </div>

      <button className="w-full p-3.5 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-semibold text-lg rounded-md shadow-[0_4px_12px_rgba(255,208,80,0.3)] hover:shadow-[0_6px_15px_rgba(255,208,80,0.5)] hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-400 hover:-translate-y-0.5 active:scale-[0.98] active:shadow-[0_2px_6px_rgba(255,208,80,0.3)] transition-all sm:p-3 sm:text-base xs:p-2 xs:text-sm">
        SUBMIT
      </button>
    </div>
  );
};

export default PostBlog;
