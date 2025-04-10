import Image from "next/image";
import React from "react";
import boss from "../../../../public/bosswoods.jpg";

const About = () => {
  return (
    <section className="p-5 md:p-20 bg-white">
      <div className="container mx-auto max-w-5xl flex-col md:flex-row flex gap-20">
        <div className="flex flex-1 flex-col gap-5">
          <h3 className="text-lg text-[#D3AB68] uppercase">About Us</h3>
          <h2 className="text-3xl font-bold md:text-4xl">
            Working hard for you since 2020
          </h2>
          <div className="w-[80px] h-[0.5px] bg-[#D3AB68]"></div>
          <p>
            The business was founded by various owners in 1960 under the name
            The Tobacco Shop, a modest business located on a small street on the
            outskirts of London. The duplex store had an excellent selection of
            cigars, pipes, and pipe tobacco. <br /> <br /> After a record 5
            years, the store has turned into a network that includes its own
            tobacco production. Over the next 25 years, the store grew and
            developed until it entered the global market. The products offered
            in our store will be appreciated by true connoisseurs of quality
            tobacco. In the production of our brands, we use world famous
            varieties of tobacco. <br />
            <br /> Staying true to classic traditions, we are constantly
            improving our products and working on creating new combinations with
            unique characteristics and unusual taste sensations.
          </p>
          <button className="text-[#D3AB68] block mt-7 w-fit px-5 py-2 border-[2px] border-[#D3AB68]">
            LEARN MORE
          </button>
        </div>
        <div className="flex relative flex-1 items-center justify-center w-full h-full">
          <Image
            src={boss}
            alt="Boss Image"
            className="w-full z-10 h-auto object-cover"
          />
          <div className="w-full -left-9 absolute -top-8 h-[500px]  bg-[#F6F1EA] object-cover"></div>
          <div className="w-full -right-10 absolute -bottom-12 h-[500px]  border-[5px] border-[#D3AB68] object-cover"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
