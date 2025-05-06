import "./Category.css";

const Tags = ({ tags = [] }) => {
  return (
    <div className="tags-section">
      <h3 className="section-title">All Tags</h3>
      <div className="tags-list">
        {tags.map((tag, i) => (
          <li key={i} className="tag-item">
            {tag}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Tags;
