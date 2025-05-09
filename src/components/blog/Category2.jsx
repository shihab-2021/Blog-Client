const Category2 = ({ categories = [] }) => {
  if (!categories || !Array.isArray(categories)) {
    return (
      <div className="text-center text-gray-500 font-inter text-base py-5">
        No categories available
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-6 px-4 sm:px-6 lg:px-8 max-w-[1700px] mx-auto">
      <h3 className="font-inter font-bold text-2xl md:text-3xl text-blue-900 mb-6">
        All Categories
      </h3>
      <div className="flex flex-row flex-wrap gap-6 justify-between">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[200px] flex flex-col p-5 bg-gray-50 border border-indigo-100 rounded-lg hover:bg-yellow-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slideFadeIn`}
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-10 h-10 object-contain mb-3 hover:scale-110 transition-transform duration-300"
            />
            <h4 className="font-inter font-semibold text-lg md:text-xl text-blue-900 mb-2">
              {cat.name}
            </h4>
            <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed">
              {cat.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category2;
