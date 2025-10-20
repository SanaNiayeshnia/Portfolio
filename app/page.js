import Image from "next/image";
import HomeBio from "./_components/home/HomeBio";
import SkillsSlider from "./_components/home/SkillsSlider";
import HomeServices from "./_components/home/HomeServices";
import HomeWorkExperiences from "./_components/home/HomeWorkExperiences";
import HomeEducation from "./_components/home/HomeEducation";
import HomePortfolio from "./_components/home/HomePortfolio";

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
    </div>
  );
}
