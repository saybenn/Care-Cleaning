import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "A spotless home starts with us. We'll keep every corner clean and every surface fresh.",
    image: "/images/house.webp",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Revive your carpets with deep-clean technology that removes dust, allergens, and stains.",
    image: "/images/carpet.webp",
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal clear windows, streak-free results. Let the light shine in like never before.",
    image: "/images/window.webp",
  },
  {
    title: "Kitchen Cleaning",
    description:
      "From countertops to stovetops, we’ll scrub and sanitize every inch of your kitchen.",
    image: "/images/kitchen.webp",
  },
  {
    title: "Bathroom Cleaning",
    description:
      "Pristine bathrooms, free from grime and buildup, so you can relax and refresh.",
    image: "/images/bathroom.webp",
  },
];

const ServiceCard = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gray-800">
        Our Cleaning Services
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-xl bg-white flex flex-col items-center transition hover:scale-105 duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={160}
              height={160}
              className="mb-4"
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
