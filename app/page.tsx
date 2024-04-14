import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HoverCard from "@/components/HoverCard";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Hero />
      <Steps />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:pb-12 sm:pt-16 sm:px-6 lg:px-8">
        <div className="">
          {/* <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">
            Your Health
          </h2> */}
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Dr. Monica can help you in:
          </p>
          {/* <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p> */}
        </div>
      </div>

      <div className="px-16 flex flex-row gap-4">
        <HoverCard
          cardTitle="Track your periods"
          content="Will estimate next period date, suggest dates for getting pregnant (not to be used as a contraceptive). Will calculate menstrual health index. "
        />
        <HoverCard
          cardTitle="Heal your periods"
          content="Period problems happen due to hormone imbalance and underlying conditions like PCOS, Endometresis, Fibroids etc. Based on your menstrual health index, Dr. Monica will give her recommendations to heal your periods by diet, lifestyle modifications & natural supplements. No hormones!!"
        />
        <HoverCard
          cardTitle="Menopause"
          content="You don't have to pause with menopause. We can help you sail through these difficult time by diet, lifestyle modifications & natural supplements. No hormones!!"
        />
        <HoverCard
          cardTitle="Infertility"
          content="Dr. Monica is currently getting trained in infertility."
        />
      </div>

      <Features />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
