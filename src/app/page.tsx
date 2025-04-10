import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Instagram from "@/components/sections/Instagram";
import Products from "@/components/sections/Products";
import { Helpers } from "@/lib/Helpers";

export default async function Home() {
  const insta = (await Helpers.formatProducts()) || [];
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Hero />
        <About />
        <Products />
        <Instagram insta={insta} />
      </main>
    </div>
  );
}
