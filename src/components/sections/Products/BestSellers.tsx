import BestSellersItems from "@/components/UI/BestSellerItems";
import React from "react";

const BestSellers = () => {
  return (
    <section className="p-5 flex flex-col gap-y-10 md:p-20 bg-[#F8F8F8]">
      <div className="container mx-auto text-center flex flex-col gap-5">
        <h3 className="text-[#D3AB68] font-medium">OUR PRODUCTS</h3>
        <h3 className="text-4xl font-semibold">Online Shop</h3>
        <div className="w-[200px] mx-auto h-[1.5px] bg-[#D3AB68]"></div>
        <p className="md:px-5 leading-[2] max-w-lg mx-auto">
          We offer a wide range of quality products, an easy shopping process,
          express delivery and first-class service.
        </p>
      </div>
      <div className="container mx-auto mt-16 max-w-7xl flex items-center gap-6">
        <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
        <h2 className="text-[#D3AB68] font-semibold text-4xl">Best Sellers</h2>
        <div className="flex-1 h-[2.5px] bg-[#D3AB68]"></div>
      </div>
      <BestSellersItems />
    </section>
  );
};

export default BestSellers;
