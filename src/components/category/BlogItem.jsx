import "./Category.css";

const BlogItem = ({ img, category, title, description }) => (
  <div className="blog-item">
    <img src={img} alt="blog" className="blog-item-image" />
    <div className="blog-item-content">
      <p className="blog-item-category">{category}</p>
      <p className="blog-item-title">{title}</p>
      <p className="blog-item-description">{description}</p>
    </div>
  </div>
);

export default BlogItem;
