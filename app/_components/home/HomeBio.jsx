import Image from "next/image";
import Hightlighter from "../ui/Hightlighter";

function HomeBio() {
  return (
    <div className="flex items-center gap-8 justify-center">
      <div className="max-w-96">
        <Image
          src="/images/doodles/doodle5.png"
          alt="doodle"
          width="100"
          height="100"
          className="mb-2"
        />
        <h2 className="text-3xl font-semibold mb-2">Sana Niayeshnia</h2>
        <p className="text-justify text-lg font-medium ">
          A{" "}
          <span className="relative">
            front-end developer
            <Hightlighter className="bg-blue-200" />
          </span>{" "}
          who turns creative ideas into friendly, interactive websites. My goal?
          Make every click feel like a{" "}
          <span className="relative">
            high-five
            <Hightlighter className="bg-pink-200" />
          </span>
          .
        </p>
      </div>
      <div className="size-90 relative shrink-0">
        <Image src="/images/doodles/doodle15.png" alt="wireframe" fill />
        <Image
          src="/images/doodles/doodle1.png"
          width="65"
          height="65"
          className="absolute top-20 -left-0"
        />
        <Image
          src="/images/doodles/doodle18.png"
          width="100"
          height="100"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default HomeBio;
