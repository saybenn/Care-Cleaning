import React from "react";

const PricingCards = () => {
  const pricingPlans = [
    {
      title: "One-Time Cleaning",
      price: "$99",
      features: [
        "Thorough top-to-bottom cleaning",
        "Includes kitchen, bath, and floors",
        "Perfect for move-ins/outs or seasonal resets",
      ],
    },
    {
      title: "Regular Cleaning",
      price: "$149/mo",
      features: [
        "Bi-weekly or monthly maintenance",
        "Dusting, vacuuming, surfaces, and more",
        "Ideal for busy households",
      ],
    },
    {
      title: "Commercial Cleaning",
      price: "From $199",
      features: [
        "Custom plans for offices and shops",
        "Professional-grade equipment & products",
        "After-hours availability",
      ],
    },
  ];

  return (
    <section id="pricing" className=" py-16 px-4 sm:px-6 lg:px-20 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12">
        Choose Your Perfect Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              {plan.price}
            </p>
            <ul className="text-sm sm:text-base lg:text-lg text-gray-700 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingCards;
