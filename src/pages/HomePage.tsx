import { RecommendedRestoList } from "@/components/HomePage/RecommendedRestoList";
import { LandingHero } from "@/components/HomePage/LandingHero";
import { Category } from "@/components/HomePage/Category";
import Header from "@/components/HeaderSection/Header";
import Footer from "@/components/FooterSection/Footer";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center w-full h-[2414px] lg:w-full lg:h-[2387px]">
      <Header />
      <LandingHero />
      <Category />
      <RecommendedRestoList />
      <Footer />
    </section>
  );
}
