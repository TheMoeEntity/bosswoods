import Image from "next/image";
import React from "react";
import bg from "../../../../public/sigar-sd.png";

const Hero = () => {
  return (
    <section className="w-full relative min-h-[500px]">
      {/* Background image */}
      <Image
        src={bg}
        alt="Hero Image"
        className="w-full h-[500px] md:h-auto object-cover rounded-bl-4xl rounded-br-4xl"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.65)] rounded-bl-4xl rounded-br-4xl z-10" />

      {/* Content */}
      <div className="absolute z-20 top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="px-5 md:px-10 w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-20">
            {/* Decorative line */}
            <div className="hidden md:block w-[80px] h-[1px] bg-[#D3AB68]" />

            {/* Text Content */}
            <article className="text-[var(--background)] flex flex-col gap-6 text-center md:text-left max-w-2xl">
              <h3 className="text-sm md:text-lg text-[#D3AB68] uppercase tracking-widest">
                Tobacco Online Store
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Delicious and Rare Tobacco Products
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                We offer a wide range of quality products, an easy and
                convenient shopping process, express delivery and first-class
                service.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="bg-[#D3AB68] px-6 py-2 text-[var(--foreground)] font-medium rounded">
                  SHOP NOW
                </button>
                <button className="text-[#D3AB68] px-6 py-2 border-2 border-[#D3AB68] font-medium rounded">
                  LEARN MORE
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
