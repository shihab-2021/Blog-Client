import React from "react";
import CategoryCom from "@/components/category/CategoryCom";

const text = "Blog > Business ";
function Category() {
  return (
    <div>
      <div className="bg-purple-100 py-10 mt-29 text-center">
        <h1 className="font-bold text-xl md:text-2xl mb-6 ">Business</h1>
        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
          {text}
        </p>
      </div>

      {/* Rest of the content */}
      <CategoryCom />

    </div>
  );
}

export default Category;
