import React from "react";
import BestSellers from "./BestSellers";
import ProductItem from "@/components/UI/ProductItem";

const Products = () => {
  return (
    <section>
      <BestSellers />
      <div className="bg-white py-5">
        <h1 className="font-black mt-20 text-4xl md:text-6xl text-center">
          MAIN MENU
        </h1>
        <div className="container  p-5 md:p-12 max-w-7xl mx-auto flex items-center gap-6">
          <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
          <h2 className="text-[#D3AB68] font-semibold text-4xl">
            Crispy Check
          </h2>
          <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
        </div>
        <div className="container p-5 max-w-6xl md:px-24 md:py-5 mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {[...Array(6)].map((_x, i) => (
            <ProductItem key={i} />
          ))}
        </div>
        <div className="container p-5 md:p-12 max-w-7xl mx-auto flex items-center gap-6">
          <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
          <h2 className="text-[#D3AB68] font-semibold text-4xl">Sauces</h2>
          <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
        </div>
        <div className="container p-5 max-w-6xl md:px-24 md:py-5 mt-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
          {[...Array(2)].map((_x, i) => (
            <ProductItem key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
