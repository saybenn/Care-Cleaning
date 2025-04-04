import React from "react";

const Intro = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-10 text-center space-y-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-4">
        {["Home", "Office", "Apartment"].map((type) => (
          <button
            key={type}
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-pink-100 transition"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Call to Action */}
      <p className="text-lg text-gray-700">
        Call us and let&rsquo;s discuss your specific needs so we can{" "}
        <span className="font-semibold text-pink-500">
          guarantee your satisfaction
        </span>{" "}
        and deliver the quality service you deserve.
      </p>

      {/* Frequency Options */}
      <div className="text-sm text-gray-600 space-x-2">
        <span className="hover:text-pink-500 cursor-pointer">One-Time</span>·
        <span className="hover:text-pink-500 cursor-pointer">Weekly</span>·
        <span className="hover:text-pink-500 cursor-pointer">Bi-Weekly</span>·
        <span className="hover:text-pink-500 cursor-pointer">Monthly</span>
      </div>

      {/* Book Button */}
      <div>
        <button className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition">
          Book
        </button>
      </div>
    </div>
  );
};

export default Intro;
