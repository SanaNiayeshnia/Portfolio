import Image from "next/image";
import HomeBio from "./_components/home/HomeBio";
import SkillsSlider from "./_components/home/SkillsSlider";
import HomeServices from "./_components/home/HomeServices";

export default function Home() {
  return (
    <div className="">
      <Image
        src="/images/doodles/doodle19.png"
        alt="doodle"
        width="100"
        height="100"
        className="-ml-12 z-10"
      />
      <HomeBio />
      <SkillsSlider />
      <HomeServices />
    </div>
  );
}
