"use client";
import Image from "next/image";
import { damion } from "../../../app/fonts";
import { InstagramIcon } from "lucide-react";

const Instagram = ({ insta }: { insta: string[] }) => {
  return (
    <section className="rounded-t-3xl bg-[#F6EFE2] p-7 md:p-16 text-[var(--foreground)]">
      <span
        className={`text-center mx-auto flex text-3xl items-center gap-3 w-fit ${damion.className}`}
      >
        <InstagramIcon color="#D3AB68" /> BossWoods
      </span>
      <p className="text-center my-4">
        Follow us on social media for more discount & promotions
      </p>
      <p className="text-center my-3">@bosswoods.cigars</p>
      <div className="container p-5 md:p-12 max-w-7xl mx-auto flex items-center gap-6">
        <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
        <h2 className="text-[#D3AB68] text-3xl text-center font-semibold md:text-4xl">
          FOLLOW US ON INSTAGRAM
        </h2>
        <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-7 mx-auto max-w-7xl px-1">
        {insta &&
          insta.slice(10, 14).map((x, i) => (
            <div key={i} className="w-full">
              <div className="relative w-full h-[300px] sm:h-[280px] md:h-[220px] lg:h-[300px] rounded overflow-hidden">
                <Image
                  fill
                  src={x}
                  alt={`Instagram ${i}`}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Instagram;
