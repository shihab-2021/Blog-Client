import React from "react";

const BlogItem = ({ img, category, title, description }) => (
  <div className="flex gap-4 my-6">
    <img src={img} alt="blog" className="w-50 h-50 object-cover rounded" />
    <div>
      <p className="text-sm uppercase tracking-widest text-violet-800 mb-2">
        {category}
      </p>
      <p className="text-2xl md:text-2xl font-semibold mb-2">{title}</p>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  </div>
);

function CategoryCom() {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-4 py-10 max-w-screen-xl mx-auto">
      {/* Left: Blog List */}
      <div className="flex-1">
        {[1, 2, 3, 4].map((_, i) => (
          <BlogItem
            key={i}
            img="/blogPhoto1.png"
            category="Business"
            title="Top 6 free website mockup tools 2022"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
          />
        ))}
      </div>

      {/* Right: Categories + Tags */}
      <div className="w-full md:w-1/3">
        {/* Categories */}
        <div className="mb-10">
          <h3 className="font-bold text-xl md:text-2xl mb-6">Categories</h3>
          {[
            { name: "Startup", icon: "/icon1.png" },
            { name: "Business", icon: "/icon.png" },
            { name: "Economy", icon: "/icon2.png" },
            { name: "Technology", icon: "/cyborg.png" },
          ].map((cat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 mb-4 border border-gray-300 rounded-lg hover:bg-amber-100 transition"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-14 h-14 bg-amber-50 rounded-lg p-2"
              />
              <p className="font-semibold text-base">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div>
          <h1 className="font-bold text-xl md:text-2xl mb-6">All Tags</h1>
          <div className="flex flex-wrap gap-3">
            {["Business", "Experience", "Screen", "Technology", "Marketing", "Life"].map(
              (tag, i) => (
                <li
                  key={i}
                  className="list-none border border-gray-300 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </li>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCom;












