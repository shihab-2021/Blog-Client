const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
          <div className="flex flex-col justify-center items-center w-full sm:w-1/2 p-6 bg-white hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 tracking-wider mb-4">
              ABOUT US
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight text-center">
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1700px] w-full mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Resources/aboutUs/About-Hero.png')" }}
      >
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-[600px] sm:max-w-[630px] h-28 sm:h-32 lg:h-36 bg-yellow-400 flex justify-around items-center shadow-md hover:-translate-y-1 transition-transform duration-300">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              12+
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              Blogs Published
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              18K+
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              Views on Finsweet
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              30K+
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              Total active Users
            </p>
          </div>
        </div>
        <img
          src="/Resources/aboutUs/Line.png"
          alt="Line Image"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[960px] h-6 sm:h-7 lg:h-8"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-purple-50 my-12">
        <div className="w-full lg:w-1/2 p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 tracking-wider mb-4">
            OUR MISSION
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-4">
            Creating valuable content for creatives all around the world
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            The industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 tracking-wider mb-4">
            OUR VISION
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-4">
            A platform that empowers individuals to improve
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-12 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-full lg:w-1/2 p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 tracking-wider mb-4">
            OUR TEAM
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-4">
            A united world, connected by technology
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed border-b-4 border-yellow-400 pb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters. Many desktop publishing packages and web page editors now
            use Lorem Ipsum.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src="/Resources/aboutUs/Hand.png"
            alt="Hand Img"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-between items-center max-w-[1700px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-12 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-full lg:w-1/2 p-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 tracking-wider mb-4">
            OUR TEAM
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mb-4">
            We are a team of content writers who share their learnings
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed border-b-4 border-purple-600 pb-4">
            The industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <img
            src="/Resources/aboutUs/Blog.png"
            alt="Blog Img"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
