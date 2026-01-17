import Banner from "@/components/home/Banner";
import DiscountProducts from "@/components/home/DiscountProducts";
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/FeaturesSection";
import Howitworks from "@/components/home/Howitworks";
import MarqueeSection from "@/components/home/MarqueeSection";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
   <div className="space-y-20">
    <section>
      <Banner></Banner>
    </section>

{/* <Howitworks></Howitworks> */}

    <section>
      <DiscountProducts></DiscountProducts>
    </section>

    <section>
      <Products></Products>
    </section>

    <section>
      <MarqueeSection></MarqueeSection>
    </section>

    <section>
      <Testimonials></Testimonials>
    </section>

    <section>
      <FeaturesSection></FeaturesSection>
    </section>

    <section>
      <FAQ></FAQ>
    </section>




   </div>
  );
}
