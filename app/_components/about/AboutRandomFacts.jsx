import { randomFacts } from "@/app/_lib/db";
import Image from "next/image";
import Underline from "../ui/Underline";

function AboutRandomFacts() {
  return (
    <div className="bg-white pt-5 pb-10 px-10 border-3 sm:w-max mx-auto shadow-strict relative">
      <Image
        src="/images/doodles/doodle18.png"
        alt="doodle"
        width="100"
        height="100"
        className="absolute -top-10 -left-10"
      />
      <h2 className="font-semibold text-3xl font-caveat relative">
        Random facts about me
        <Underline />
      </h2>
      <ol className="mt-5 list-decimal pl-2 space-y-1">
        {randomFacts?.map((fact, index) => (
          <li key={index} className="font-medium font-caveat text-xl">
            {fact}{" "}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AboutRandomFacts;
