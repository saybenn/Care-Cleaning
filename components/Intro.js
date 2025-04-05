import React from "react";

const Intro = () => {
  return (
    <section className="px-4 py-10 max-w-4xl mx-auto text-center space-y-8 sm:px-6 lg:py-24">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
        Cleaning With Care
      </h2>

      {/* Tabs */}
      <div className="flex justify-center bg-[var(--color-primary)] rounded-full border-2 border-gray-900 overflow-hidden text-base sm:text-lg font-bold">
        <button className="w-full py-3 hover:bg-pink-300 transition">
          Homes
        </button>
        <button className="w-full py-3 border-x-2 border-gray-900 hover:bg-pink-300 transition">
          Apartments
        </button>
        <button className="w-full py-3 hover:bg-pink-300 transition">
          Offices
        </button>
      </div>

      {/* Call to Action */}
      <p className="text-base sm:text-lg text-gray-700 px-4">
        Call us and let&rsquo;s discuss your specific needs so we can{" "}
        <span className="font-semibold text-pink-500">
          guarantee your satisfaction
        </span>{" "}
        and deliver the quality service you deserve.
      </p>

      {/* Frequency Options */}
      <div className="text-sm sm:text-base flex flex-wrap justify-center gap-x-1 text-gray-900 font-bold">
        <span>One-Time</span>
        <span>·</span>
        <span>Weekly</span>
        <span>·</span>
        <span>Bi-Weekly</span>
        <span>·</span>
        <span>Monthly</span>
      </div>

      {/* Book Button */}
      <div>
        <button className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-600 transition w-full sm:w-1/2 md:w-1/3">
          Book
        </button>
      </div>
    </section>
  );
};

export default Intro;
