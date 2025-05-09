const BlogItem = ({ img, category, title, description }) => (
  <div className="flex flex-col md:flex-row gap-6 mb-8 animate-slideUp">
    <img
      src={img}
      alt="blog"
      className="w-full md:w-50 h-50 object-cover rounded-lg hover:scale-[1.03] hover:shadow-lg transition-all duration-300"
    />
    <div className="flex-1">
      <p className="font-inter font-bold text-sm uppercase tracking-widest text-purple-600 mb-2 animate-fadeInText">
        {category}
      </p>
      <p className="font-sen font-bold text-xl md:text-2xl text-gray-900 mb-3 hover:text-purple-600 hover:-translate-y-1 transition-all duration-300">
        {title}
      </p>
      <p className="font-inter text-gray-600 text-base leading-relaxed animate-fadeInText">
        {description}
      </p>
    </div>
  </div>
);

export default BlogItem;
