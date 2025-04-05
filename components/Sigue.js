import Image from "next/image";
import React from "react";

const Sigue = () => {
  return (
    <section className="relative w-full bg-[var(--color-secondary)] sm:py-28 lg:py-3 px-4 text-center mt-16 pb-4">
      {/* Image Wrapper */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-2/12 w-3/4 sm:w-2/3 md:w-1/2 lg:w-[500px] h-[300px] md:h-[350px] lg:h-[400px] z-10">
        <Image
          src="/images/accent3.png"
          alt="Woman cleaning"
          fill
          className="object-contain"
          priority
        />
        {/* Did You Know? */}
        <div className="absolute bottom-4 left-4 bg-white/80 text-base sm:text-base md:text-lg text-gray-800 px-4 py-2 rounded-xl shadow-md backdrop-blur z-20">
          <strong>Did You Know?</strong>
          <br />A clean home can boost your mood and focus!
        </div>
      </div>

      {/* Main Quote */}
      <h2 className="relative z-20 max-w-4xl mx-auto text-white italic px-4 mt-[0px] sm:mt-[250px] md:mt-[200px] lg:mt-[350px] text-xl sm:text-xl md:text-2xl lg:text-3xl leading-relaxed pt-64 lg:pt-0 md:pt-0">
        Living in clean spaces can lead to some unexpected benefits, including
        improved mental health, better sleep, and even a boost in productivity,
        stemming from the reduction of stress and clutter.
      </h2>
    </section>
  );
};

export default Sigue;
