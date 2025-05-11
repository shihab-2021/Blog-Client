const Contact = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-32 mb-12 bg-white shadow-lg rounded-lg text-center animate-slideUp font-sansita">
      <div className="font-sen font-semibold text-base uppercase tracking-wider text-purple-600 mb-4">
        Contact Us
      </div>
      <h1 className="font-sen font-bold text-3xl md:text-4xl text-gray-900 mb-4">
        Let's Start a Conversation
      </h1>
      <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
        Keep explore, keep taking knowledge, be happy
      </p>
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 mb-8 rounded-lg shadow-xl">
        <div className="flex-1 text-left">
          <p className="font-inter text-sm opacity-80 mb-2">Working hours</p>
          <p className="font-inter font-bold text-lg md:text-xl">
            Monday To Friday <br /> 9:00 AM to 8:00 PM
          </p>
          <p className="font-inter text-base opacity-80 mt-2">
            Our Support Team is available 24/7
          </p>
        </div>
        <div className="flex-1 text-left md:text-right">
          <p className="font-inter text-sm opacity-80 mb-2">Contact Us</p>
          <p className="font-inter font-bold text-lg md:text-xl">
            020 7793 2905
          </p>
          <p className="font-inter text-base opacity-80 mt-2">
            hello@finsweet.com
          </p>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
        />
        <select
          required
          className="w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
        >
          <option value="" disabled selected>
            Query Related
          </option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Message"
          required
          className="w-full p-4 border border-gray-300 rounded-lg font-inter text-base text-gray-900 h-24 resize-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-amber-400 to-amber-300 text-gray-900 font-sen font-semibold text-lg py-4 rounded-lg shadow-lg hover:from-amber-300 hover:to-amber-400 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
