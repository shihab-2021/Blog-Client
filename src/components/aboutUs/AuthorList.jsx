import "./AuthorList.css";
import authors from "../../TempData/authors.js";

const AuthorList = () => {
  return (
    <>
      <div className="heading">
        <h1>List Of Authers</h1>
      </div>
      <div className="list">
        {authors.map((author, index) => {
          return (
            <div className="single" key={index}>
              <img src={author.image} alt="Author" />
              <h2>{author.name}</h2>
              <h4>{author.designation}</h4>
              <div className="icons">
                <a href={author.facebook}>
                  <img src="\Resources\aboutUs\Icon1.png" alt="Icon" />
                </a>
                <a href={author.twitter}>
                  <img src="\Resources\aboutUs\Icon2.png" alt="Icon" />
                </a>
                <a href={author.instagram}>
                  <img src="\Resources\aboutUs\Icon3.png" alt="Icon" />
                </a>
                <a href={author.linkedin}>
                  <img src="\Resources\aboutUs\Icon4.png" alt="Icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AuthorList;
