import Slider from "react-slick";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      name: "Jessica M.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ The team was incredibly professional and left my home spotless. I couldn’t believe how fresh everything felt after they finished!",
      date: "March 2025",
    },
    {
      name: "Daniel K.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ We hired them for a full office clean and they exceeded expectations. Reliable, detail-oriented, and very efficient!",
      date: "February 2025",
    },
    {
      name: "Maria L.",
      review:
        "⭐️⭐️⭐️⭐️⭐️ We moved out of our apartment and booked a deep clean. Landlord said it was the cleanest unit he’d ever seen. Highly recommend!",
      date: "January 2025",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-background)] text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-10 bg-white rounded-xl shadow-lg text-center"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 italic">
                “{item.review}”
              </p>
              <p className="font-semibold text-[var(--color-secondary)] text-lg">
                {item.name}
              </p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
