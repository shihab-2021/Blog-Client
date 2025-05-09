import Tags from "./Tags";

const Sidebar = ({ categories = [], tags = [] }) => {
  if (!categories || !Array.isArray(categories)) {
    return (
      <div className="text-gray-500 font-inter text-base">
        No categories available
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/3">
      <div className="mb-12 animate-slideUp">
        <h3 className="font-sen font-bold text-xl md:text-2xl text-gray-900 mb-6">
          Categories
        </h3>
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 mb-4 border border-gray-200 rounded-lg hover:bg-amber-100 hover:-translate-y-1 transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-14 h-14 bg-amber-50 rounded-lg p-2 hover:scale-105 transition-transform duration-300"
            />
            <p className="font-inter font-semibold text-base text-gray-900">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
      <Tags tags={tags} />
    </div>
  );
};

export default Sidebar;
