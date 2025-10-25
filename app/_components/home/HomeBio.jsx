import Image from "next/image";
import HighLighter from "../ui/Highlighter";
import Button from "../ui/Button";

function HomeBio() {
  return (
    <section className="flex px-10 flex-col md:flex-row-reverse items-center gap-8 justify-center">
      <div className="max-w-96 flex flex-col gap-2">
        <Image
          src="/images/doodles/doodle5.png"
          alt="doodle"
          width="100"
          height="100"
          className="self-end"
        />
        <h2 className="text-4xl font-semibold ">Sana Niayeshnia</h2>
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
        <Button href="/projects" withDoodle className="self-end">
          See My Projects
        </Button>
      </div>
      <div className="size-90 relative shrink-0">
        <Image src="/images/doodles/doodle15.png" alt="wireframe" fill />
        <Image
          src="/images/doodles/doodle1.png"
          width="65"
          height="65"
          className="absolute top-20 -left-0"
          alt="doodle"
        />
        <Image
          src="/images/doodles/doodle18.png"
          width="100"
          height="100"
          className="absolute bottom-0 right-0"
          alt="doodle"
        />
      </div>
    </section>
  );
}

export default HomeBio;
