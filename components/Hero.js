import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#ffe5ec] overflow-hidden">
      {/* Base Decorative Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blue sweeping wave */}
        <div className="absolute w-[150%] h-[500px] bg-blue-300 rotate-[15deg] left-[-25%] top-[50px] rounded-[100%] blur-2xl opacity-40" />

        {/* Pink crest shape */}
        <div className="absolute w-[300px] h-[300px] bg-pink-200 left-[-100px] bottom-[50px] rounded-full blur-[100px] opacity-50" />

        {/* Arcing light highlight */}
        <div className="absolute w-[500px] h-[200px] bg-white left-[20%] top-[100px] rounded-[50%] blur-3xl opacity-20 rotate-[5deg]" />

        {/* Radial highlight */}
        <div className="absolute w-[300px] h-[300px] bg-pink-100 right-[20%] top-[30%] rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-heading">
            Professional Cleaning You Can Count On
          </h1>
          <p className="text-lg text-gray-700 font-sans">
            Call us and let&rsquo;s discuss your specific needs so we can{" "}
            <span className="font-semibold text-pink-500">
              guarantee your satisfaction
            </span>{" "}
            and deliver the quality service you deserve.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition shadow-md font-heading">
            Book Now
          </button>
        </div>

        {/* Cleaning Woman Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="Woman cleaning"
            width={400}
            height={400}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
