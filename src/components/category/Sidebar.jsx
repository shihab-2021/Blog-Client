import "./Category.css";
import Tags from "./Tags";

const Sidebar = ({ categories = [], tags = [] }) => {
  if (!categories || !Array.isArray(categories)) {
    return <div>No categories available</div>;
  }

  return (
    <div className="sidebar">
      <div className="categories-section">
        <h3 className="section-title">Categories</h3>
        {categories.map((cat, i) => (
          <div key={i} className="category-item">
            <img src={cat.icon} alt={cat.name} className="category-icon" />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
      <Tags tags={tags} />
    </div>
  );
};

export default Sidebar;
