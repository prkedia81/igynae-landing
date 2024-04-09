import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HoverCard from "@/components/HoverCard";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:pb-12 sm:pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Your Health
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your health.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
      </div>

      <div className="px-16 flex flex-row gap-4">
        <HoverCard
          cardTitle="Menstrual Cycle"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
        <HoverCard
          cardTitle="Infertility"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
        <HoverCard
          cardTitle="One more thing"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
        <HoverCard
          cardTitle="Last thing"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        />
      </div>

      <Features />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
