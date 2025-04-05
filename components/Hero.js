import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-accent)] overflow-hidden">
      {/* Base Decorative Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Arcing light highlight */}
        <svg
          className="absolute top-[100px] left-0 w-[1800px] h-[500px] rotate-[-35deg] opacity-50 pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 1800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,400 Q1000,-300 1800,400"
            stroke="rgba(255,182,189,1)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute top-[100px] left-0 w-[1800px] h-[500px] rotate-[-35deg] opacity-50 pointer-events-none z-0 hidden lg:block"
          viewBox="0 0 1800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,400 Q1000,-200 1800,400"
            stroke="rgba(255,182,189,1)"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        {/* Blue sweeping wave */}
        <div className="absolute w-[150%] h-[500px] bg-blue-300 rotate-[3deg] left-[-39%] top-[0px] rounded-[100%] blur-[8px] opacity-40 lg:h-[900px]" />

        {/* Pink crest shape */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[600px] bg-pink-200 left-[-120px] bottom-[-30px] md:bottom-[-300px] rounded-full opacity-80 blur-[100px] " />

        <div className="absolute lg:w-[1000px] lg:h-[500px] bg-pink-200 left-[-120px] bottom-[-30px] lg:bottom-[-300px] rounded-full opacity-80 blur-[100px] " />

        {/* Pink crest shape */}
        <div className="absolute w-[100px] h-[100px] rotate-[30deg] bg-pink-200 xs:bg-red-900 left-[-120px] bottom-[-200px] rounded-full opacity-80 blur-[10px]" />
        {/* Pink crest shape */}
        <div className="absolute w-[400px] h-[400px] sm:h-[300px] sm:w-[300px] rotate-[30deg] bg-pink-300 left-[-120px] bottom-[-200px] rounded-full opacity-80 blur-[50px] " />

        {/* Radial highlight */}
        <div className="absolute w-[300px] h-[300px] bg-blue-100 right-[20%] top-[30%] rounded-full blur-[120px] opacity-30 " />

        <div className="absolute bottom-0 mt-10 md:mt-0 md:left-1/12">
          <Image
            src="/images/hero.webp"
            alt="Woman cleaning"
            width={400}
            height={400}
            priority
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 400px, 400px"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
        <div className="absolute w-full h-full bg-black/0"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-32 flex flex-col-reverse md:flex-row items-center justify-center md:justify-end gap-10 sm:gap-16">
        {/* Text Section */}
        <div className="w-full max-w-xl text-center md:text-right space-y-6 text-white font-inter">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-shadow-lg">
            Professional Cleaning You Can Count On
          </h1>
          <p className="text-base sm:text-lg text-shadow-lg font-inter md:w-[100%] mx-auto md:mx-0">
            Because every{" "}
            <span className="font-semibold text-pink-500 text-shadow-none">
              home, office, and apartment{" "}
            </span>
            deserves more than clean — it deserves care.
          </p>
          <div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition shadow-md font-poppins">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
