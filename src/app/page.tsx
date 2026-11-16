import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Disclosure } from "@/components/ui/Disclosure";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <section className="bg-ivory py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Disclosure />
        </div>
      </section>
    </>
  );
}