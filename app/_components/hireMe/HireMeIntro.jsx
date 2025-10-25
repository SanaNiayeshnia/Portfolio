import Image from "next/image";
import HighLighter from "../ui/Highlighter";

export default function HireMeIntro() {
  return (
    <div className="flex items-center gap-6 justify-between px-20">
      <div className="space-y-2">
        <h1 className="font-semibold text-4xl">Let’s work together!</h1>
        <p className="text-justify font-medium text-lg">
          I’d love to hear about your project, your vision, or even your
          weirdest design challenge. Whether you’re starting from scratch or
          improving what you already have, I’m here to turn your ideas into
          something beautiful, responsive, and fast.{" "}
          <span className="relative font-caveat text-2xl">
            Let’s make it happen!
            <HighLighter className="bg-pink-200" />
          </span>
        </p>
      </div>
      <div className="w-80 aspect-square relative shrink-0">
        <Image src="/images/doodles/doodle39.png" alt="doodle" fill />
      </div>
    </div>
  );
}
