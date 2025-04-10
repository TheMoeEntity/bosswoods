import Image from "next/image";
import React from "react";
import bg from "../../../../public/sigar-sd.png";

const Hero = () => {
  return (
    <section className="w-full relative min-h-[500px]">
      <Image
        src={bg}
        alt="Hero Image"
        className="w-full h-auto object-cover rounded-bl-4xl rounded-br-4xl"
      />
      <div
        className="absolute rounded-bl-4xl rounded-br-4xl bg-[rgba(0,0,0,0.65)] top-0 w-full h-full left-0 z-10 inset-0 bg-cover bg-center"
        style={{
          filter: "brightness(0.1)",
        }}
      />
      <div className="absolute flex items-center top-0 left-0 w-full h-full z-10">
        {/* Content container */}
        <div className="flex gap-0">
          <div className="p-5 md:py-28 md:px-10 mt-20">
            <div className="w-[80px] h-[0.5px] bg-[#D3AB68]"></div>
          </div>

          <article className="flex container text-[var(--background)] md:max-w-2xl md:py-28 flex-col gap-8">
            <h3 className="text-lg text-[#D3AB68] uppercase">
              Tobacco Online Store
            </h3>
            <h2 className="text-3xl md:text-6xl">
              Delicious and Rare tobacco products
            </h2>
            <p>
              We offer a wide range of quality products, an easy and convenient
              shopping process, express delivery and first-class service.
            </p>
            <div className="container space-x-5 w-fit">
              <button className="bg-[#D3AB68] px-[22px] py-[10px] text-[var(--foreground)]">
                SHOP NOW
              </button>
              <button className="text-[#D3AB68] px-5 py-2 border-[2px] border-[#D3AB68]">
                LEARN MORE
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
