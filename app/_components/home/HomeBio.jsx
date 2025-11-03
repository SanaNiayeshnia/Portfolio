import Image from "next/image";
import HighLighter from "../ui/Highlighter";
import CustomButton from "../ui/CustomButton";

function HomeBio() {
  return (
    <section className="flex px-5 md:px-10 flex-col md:flex-row-reverse items-center gap-8 justify-center">
      <div className="max-w-96 flex flex-col gap-2">
        <Image
          src="/images/doodles/doodle5.png"
          alt="doodle"
          width="100"
          height="100"
          className="self-end"
          placeholder="empty"
        />
        <h1 className="text-4xl font-semibold ">Sana Niayeshnia</h1>
        <p className="text-justify text-lg font-medium mb-5">
          A{" "}
          <span className="relative">
            front-end developer
            <HighLighter className="bg-blue-200" />
          </span>{" "}
          who turns creative ideas into friendly, interactive websites. My goal?
          Make every{" "}
          <span className="relative">
            click
            <HighLighter className="bg-amber-200" />
          </span>{" "}
          feel like a{" "}
          <span className="relative">
            high-five
            <HighLighter className="bg-pink-200" />
          </span>
          .
        </p>
        <CustomButton
          href="/projects"
          withDoodle
          className="self-end"
          aria-label="See projects"
        >
          See My Projects
        </CustomButton>
      </div>
      <div className="w-80 xs:w-90 lg:w-95 aspect-[95/100] relative shrink-0">
        <Image
          src="/images/doodles/doodle15.png"
          alt="wireframe"
          fill
          fetchPriority="high"
          sizes="360"
        />
        <Image
          src="/images/avatar/2.png"
          alt="avatar"
          fill
          className="object-contain"
          fetchPriority="high"
        />
        <Image
          src="/images/doodles/doodle1.png"
          width="65"
          height="65"
          className="absolute top-20 -left-0"
          alt="doodle"
          placeholder="empty"
        />
        <Image
          src="/images/doodles/doodle18.png"
          width="100"
          height="100"
          className="absolute bottom-0 right-0"
          alt="doodle"
          placeholder="empty"
        />
      </div>
    </section>
  );
}

export default HomeBio;
