import authors from "../../TempData/authorData.js";

const AuthorList = () => {
  return (
    <>
      <div className="text-center mb-8 bg-gradient-to-br from-purple-50 to-white shadow-sm py-8 max-w-[1700px] mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-tight">
          List Of Authors
        </h1>
      </div>
      <div className="flex flex-wrap justify-between gap-5 max-w-[1700px] mx-auto px-4">
        {authors.map((author, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-6 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1rem)] h-[450px] shadow-md hover:shadow-lg hover:bg-yellow-50 transition-all duration-300 justify-between"
          >
            <img
              src={author.image}
              alt="Author"
              className="w-32 h-32 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-36 lg:h-36 object-cover mb-4"
            />
            <h2 className="text-xl md:text-lg lg:text-2xl font-bold text-gray-800 tracking-tight">
              {author.name}
            </h2>
            <h4 className="text-base md:text-sm lg:text-lg text-gray-600">
              {author.designation}
            </h4>
            <div className="flex gap-3 mt-4">
              <a href={author.facebook}>
                <img
                  src="/Resources/aboutUs/Icon1.png"
                  alt="Facebook"
                  className="w-10 h-10 p-2 bg-white shadow-sm hover:bg-yellow-300 hover:scale-110 transition-all duration-300"
                />
              </a>
              <a href={author.twitter}>
                <img
                  src="/Resources/aboutUs/Icon2.png"
                  alt="Twitter"
                  className="w-10 h-10 p-2 bg-white shadow-sm hover:bg-yellow-300 hover:scale-110 transition-all duration-300"
                />
              </a>
              <a href={author.instagram}>
                <img
                  src="/Resources/aboutUs/Icon3.png"
                  alt="Instagram"
                  className="w-10 h-10 p-2 bg-white shadow-sm hover:bg-yellow-300 hover:scale-110 transition-all duration-300"
                />
              </a>
              <a href={author.linkedin}>
                <img
                  src="/Resources/aboutUs/Icon4.png"
                  alt="LinkedIn"
                  className="w-10 h-10 p-2 bg-white shadow-sm hover:bg-yellow-300 hover:scale-110 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuthorList;
