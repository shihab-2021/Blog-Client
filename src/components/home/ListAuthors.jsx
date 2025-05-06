import React from "react";

function ListAuthors() {
  const authors = [
    {
      id: 1,
      name: "Floyd Miles",
      des: "Content Writer @Company",
      Image: "/auther.png",
      social: [
        "/Negative3.png",
        "/Negative2.png",
        "/Negative1.png",
        "/Negative.png",
      ],
    },
    {
      id: 2,
      name: "Dianne Russell",
      des: "Content Writer @Company",
      Image: "/auther1.png",
      social: [
        "/Negative3.png",
        "/Negative2.png",
        "/Negative1.png",
        "/Negative.png",
      ],
    },
    {
      id: 3,
      name: "Jenny Wilson",
      des: "Content Writer @Company",
      Image: "/auther2.png",
      social: [
        "/Negative3.png",
        "/Negative2.png",
        "/Negative1.png",
        "/Negative.png",
      ],
    },
    {
      id: 4,
      name: "Leslie Alexander",
      des: "Content Writer @Company",
      Image: "/auther3.png",
      social: [
        "/Negative3.png",
        "/Negative2.png",
        "/Negative1.png",
        "/Negative.png",
      ],
    },
  ];
  return (
    <div className="p-4 md:p-8 mt-10">
      <h1 className="text-2xl font-bold mb-8 text-center">List of Authors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={author.Image}
              alt={author.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold">{author.name}</p>
            <p className="text-sm text-gray-600 mb-4">{author.des}</p>

            <div className="flex justify-center gap-4">
              {author.social.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`social-${index}`}
                  className="w-6 h-6 hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAuthors;
