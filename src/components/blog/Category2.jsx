import "./Category2.css";

const Category2 = ({ categories = [] }) => {
  if (!categories || !Array.isArray(categories)) {
    return <div className="no-categories">No categories available</div>;
  }

  return (
    <div className="sidebar">
      <h3 className="section-title">All Categories</h3>
      <div className="categories-section">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`category-item ${
              cat.name.toLowerCase() === "startup" ? "highlighted" : ""
            }`}
            style={{ "--index": i }}
          >
            <img src={cat.icon} alt={cat.name} className="category-icon" />
            <h4 className="category-name">{cat.name}</h4>
            <p className="category-description">
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
