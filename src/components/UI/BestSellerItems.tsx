"use client";
// components/BestSellersItems.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Define the type for each item
interface BestSellerItem {
  name: string;
  price: string;
  image: string; // Path to the image
}

const bestSellers: BestSellerItem[] = [
  {
    name: "ALFREDO",
    price: "₦ 9,000",
    image: "/smoking-man.png", // Replace with actual image path
  },
  {
    name: "TURKEY LOVER",
    price: "₦ 9,500",
    image: "/sigar-sd.png", // Replace with actual image path
  },
  {
    name: "T.N.T",
    price: "₦ 7,500",
    image: "/bosswoods.jpg", // Replace with actual image path
  },
  {
    name: "TURKEY LOVER",
    price: "₦ 9,500",
    image: "/sigar-sd.png", // Replace with actual image path
  },
  {
    name: "T.N.T",
    price: "₦ 7,500",
    image: "/bosswoods.jpg", // Replace with actual image path
  },
  {
    name: "ALFREDO",
    price: "₦ 9,000",
    image: "/smoking-man.png", // Replace with actual image path
  },
];

const BestSellersItems: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the slide-in animation after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="py-5 px-5 mt-10 md:px-20 contianer overflow-scroll">
      <div
        className={`flex gap-5 transition-transform duration-1000 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {bestSellers.map((item, index) => (
          <div
            key={index}
            className="bg-white flex gap-3 rounded-lg p-3 text-center min-w-[320px] shadow-md"
          >
            <div className="relative flex-1 w-full h-[110px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex basis-[55%] items-start justify-between flex-col gap-10">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-base text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellersItems;
