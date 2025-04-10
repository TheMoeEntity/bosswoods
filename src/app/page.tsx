import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Hero />
        <About />
        <Products />
      </main>
    </div>
  );
}
