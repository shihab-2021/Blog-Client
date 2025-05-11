const ReadNext = () => {
  return (
    <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-sen font-bold text-2xl md:text-3xl text-gray-900 text-center bg-gradient-to-r from-purple-50 to-white py-8 rounded-lg shadow-md animate-slideUp">
        What to read next
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 mt-12 border-b-4 border-purple-600 pb-12 shadow-lg animate-fadeIn">
        {[
          {
            img: "/Resources/blogPost/Next1.png",
            alt: "Team discussion",
            author: "John Doe",
            date: "Aug 23, 2021",
            title:
              "A UX Case Study Creating a Studious Environment for Students:",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          },
          {
            img: "/Resources/blogPost/Next2.png",
            alt: "Group meeting",
            author: "John Doe",
            date: "Aug 23, 2021",
            title:
              "A UX Case Study Creating a Studious Environment for Students:",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          },
          {
            img: "/Resources/blogPost/Next3.png",
            alt: "Students collaborating",
            author: "John Doe",
            date: "Aug 23, 2021",
            title:
              "A UX Case Study Creating a Studious Environment for Students:",
            description:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 hover:bg-purple-50 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.alt}
              className="w-full h-64 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
            />
            <div className="font-inter text-gray-600 text-sm mb-2">
              By{" "}
              <span className="text-purple-600 font-medium">{card.author}</span>{" "}
              | {card.date}
            </div>
            <div className="font-sen font-bold text-lg md:text-xl text-gray-900 mb-2">
              {card.title.split(" ").map((word, i) =>
                word === "Students:" ? (
                  <span key={i} className="text-purple-600">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </div>
            <div className="font-inter text-gray-600 text-base">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadNext;
