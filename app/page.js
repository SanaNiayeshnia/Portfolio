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
      <Image
        src="/images/doodles/doodle22.png"
        alt="doodle"
        width="100"
        height="100"
        className="-ml-2 -mb-5 z-10 rotate-30"
      />
      <SkillsSlider />
      <HomeServices />
    </div>
  );
}
