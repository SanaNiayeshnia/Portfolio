import Image from "next/image";
import HomeBio from "./_components/home/HomeBio";
import SkillsSlider from "./_components/home/SkillsSlider";
import HomeServices from "./_components/home/HomeServices";
import HomeWorkExperiences from "./_components/home/HomeWorkExperiences";
import HomeEducation from "./_components/home/HomeEducation";
import HomePortfolio from "./_components/home/homePortfolio/HomePortfolio";
import HighLighter from "./_components/ui/Highlighter";
import HomeCollaboration from "./_components/home/HomeCollaboration";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="md:pt-10">
      <HomeBio />
      <SkillsSlider />
      <HomeEducation />
      <HomeServices />
      <Suspense fallback={<HomeWorkExperiences loading />}>
        <HomeWorkExperiences />
      </Suspense>
      <Suspense fallback={<HomePortfolio loading />}>
        <HomePortfolio />
      </Suspense>
      <HomeCollaboration />
      <div className="px-10 pt-30 pb-5 flex flex-col-reverse gap-10 sm:flex-row sm:justify-between items-center sm:items-end">
        <p className="font-caveat text-center text-2xl font-semibold">
          You’re still here? Must be{" "}
          <span className="relative uppercase">
            fate
            <HighLighter className="bg-blue-200" />
          </span>
        </p>
        <Image
          src="/images/doodles/doodle38.png"
          alt="doodle"
          width="200"
          height="100"
          className="rotate-30"
        />
      </div>
    </div>
  );
}
