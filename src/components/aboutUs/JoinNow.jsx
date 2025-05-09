const JoinNow = () => {
  return (
    <div className="max-w-[900px] w-full mx-auto flex flex-col items-center justify-center gap-6 py-12 px-4 sm:px-6 lg:px-8 my-20 sm:my-24 lg:my-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center">
        Join our team to be a part of our story
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center leading-relaxed max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-800 font-semibold text-base sm:text-lg rounded-md shadow-lg hover:from-yellow-300 hover:to-yellow-400 hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95">
        Join Now
      </button>
    </div>
  );
};

export default JoinNow;
