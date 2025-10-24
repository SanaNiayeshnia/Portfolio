import Image from "next/image";
import HomeBio from "./_components/home/HomeBio";
import SkillsSlider from "./_components/home/SkillsSlider";
import HomeServices from "./_components/home/HomeServices";
import HomeWorkExperiences from "./_components/home/HomeWorkExperiences";
import HomeEducation from "./_components/home/HomeEducation";
import HomePortfolio from "./_components/home/HomePortfolio";
import HighLighter from "./_components/ui/Highlighter";
import HomeCollaboration from "./_components/home/HomeCollaboration";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/doodles/doodle19.png"
        alt="doodle"
        width="100"
        height="100"
        className="-ml-12 z-10"
      />
      <HomeBio />
      <SkillsSlider />
      <HomeEducation />
      <HomeServices />
      <HomeWorkExperiences />
      <HomePortfolio />
      <HomeCollaboration />
      <p className="font-caveat text-center text-2xl font-semibold px-10 pt-30 pb-5">
        You’re still here? Must be{" "}
        <span className="relative uppercase">
          fate
          <HighLighter className="bg-blue-200" />
        </span>
      </p>
    </div>
  );
}
