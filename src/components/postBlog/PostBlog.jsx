import "./PostBlog.css";
const PostBlog = () => {
  return (
    <div class="container">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Please enter your blog or documentation title"
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select id="category">
          <option>Select Category</option>
        </select>
      </div>

      <div class="upload-section">
        {/* <div class="upload-box">
          <p>Drag & Drop your video content</p>
          <button>Upload Video</button>
          <span>
            Do you want to share a video documentation? (Not required*)
          </span>
        </div> */}
        <div class="upload-box">
          <p>Drag & Drop your thumbnail image</p>
          <button>Upload Thumbnail</button>
          <span class="required">Required*</span>
        </div>
      </div>

      <div class="tags-section">
        {/* <p>Please enter some Tags...</p> */}
        <p>Press comma or click the add button to create a tag</p>
        <input type="text" placeholder="Enter tags..." />
      </div>

      <button class="submit-btn">SUBMIT</button>
    </div>
  );
};

export default PostBlog;
