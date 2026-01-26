import { useParams } from "react-router-dom";
import HeaderDetail from "@/components/HeaderSection/HeaderDetail";
import Footer from "@/components/FooterSection/Footer";
import { SlidingHero } from "@/components/DetailPage/SlidingHero";
import { RestoBanner } from "@/components/DetailPage/RestoBanner";

export default function RestaurantPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <section className="flex flex-col items-center w-full h-[2414px] lg:w-full lg:h-[2387px] lg:gap-8 bg-white">
      <HeaderDetail />
      <SlidingHero />
      <RestoBanner />
      <Footer />
    </section>
  );
}
