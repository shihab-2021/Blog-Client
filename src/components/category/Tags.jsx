const Tags = ({ tags = [] }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm hover:bg-amber-100 hover:-translate-y-1 transition-all duration-300 animate-slideUp">
      <h3 className="font-sen font-bold text-xl md:text-2xl text-gray-900 mb-6">
        All Tags
      </h3>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <li
            key={i}
            className="list-none border border-gray-200 px-4 py-2 rounded-full font-inter font-medium text-sm text-gray-900 hover:bg-purple-50 hover:scale-105 transition-all duration-300 animate-fadeInText"
            style={{ animationDelay: `${0.3 + i * 0.05}s` }}
          >
            {tag}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Tags;
