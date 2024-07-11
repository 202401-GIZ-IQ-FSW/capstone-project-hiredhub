import LandingHero from "@/components/LandingHero/LandingHero";

import PopularCategory from "@/components/PopularCategory/PopularCategory";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F5F7F8] ">
      <LandingHero />
      <PopularCategory />
    </main>
  );
}
