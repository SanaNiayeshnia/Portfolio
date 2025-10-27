import Image from "next/image";
import AboutRandomFacts from "../_components/about/AboutRandomFacts";
import TimeLine from "../_components/ui/TimeLine";
import { aboutContent } from "../_lib/db";
import Button from "../_components/ui/Button";
import HighLighter from "../_components/ui/Highlighter";

export const metadata = { title: "About" };

function About() {
  return (
    <div className="px-5 md:px-10 mt-5 pb-20">
      <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-8 md:gap-4">
        <Image
          src="/images/avatar/1.png"
          alt="avatar"
          width="350"
          height="350"
        />
        <div className="flex flex-col items-center gap-6 py-2">
          <div className="flex items-center gap-2 justify-center">
            <Image
              src="/images/doodles/doodle20.png"
              alt="doodle"
              width="20"
              height="20"
            />
            <Image
              src="/images/doodles/doodle33.png"
              alt="doodle"
              width="50"
              height="50"
              className="animate-bounce"
            />{" "}
            <Image
              src="/images/doodles/doodle20.png"
              alt="doodle"
              width="20"
              height="20"
            />
          </div>

          <p className="text-3xl font-caveat font-medium max-w-[500px] text-justify">
            Everything you might want to know about my{" "}
            <span className="relative">
              education
              <HighLighter className="bg-pink-200" />
            </span>
            ,
            <span className="relative">
              skills
              <HighLighter className="bg-sky-200" />
            </span>
            , and{" "}
            <span className="relative">
              work experience
              <HighLighter className="bg-green-200" />
            </span>{" "}
            is already covered on my{" "}
            <span className="relative">
              Home page
              <HighLighter className="bg-amber-200" />
            </span>
            . Haed back there where the serious stuff lives.
          </p>
          <Button withDoodle className="md:self-end" href="/">
            Back to the serious stuff
          </Button>
        </div>
      </div>
      <TimeLine items={aboutContent} />
      <AboutRandomFacts />
    </div>
  );
}

export default About;
