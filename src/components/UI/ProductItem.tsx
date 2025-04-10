import Image from "next/image";
import React from "react";
import pipe from "../../../public/pipe-product-5-600x600.png";
import { ShoppingCart, Star } from "lucide-react";

const ProductItem = () => {
  return (
    <div className=" items-center flex-col flex gap-7 bg-[#FAF7F2] min-h-[550px] p-5 ">
      <Image
        src={pipe}
        alt="product Image"
        className="w-full h-auto object-cover"
      />
      <span className="font-medium text-xl">BossWoods Special</span>
      {/* star ratings with lucide-react */}
      <div className="flex gap-2">
        {[...Array(5)].map((x, i) => (
          <span key={i}>
            <Star color="#D3AB68" />
          </span>
        ))}
      </div>
      <p className="text-[#D3AB68] font-semibold">₦ 7,500</p>
      <button className="text-[#D3AB68] flex items-center gap-4 px-5 py-2 border-[2px] border-[#D3AB68]">
        <ShoppingCart size={18} /> LEARN MORE
      </button>
    </div>
  );
};

export default ProductItem;
