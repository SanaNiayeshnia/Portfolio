import Image from "next/image";
import HighLighter from "../ui/Highlighter";

const services = [
  {
    title: "Core Web",
    description: (
      <>
        HTML, CSS, SASS, and{" "}
        <span className="relative">
          Responsive Design
          <HighLighter className="bg-pink-200" />
        </span>{" "}
        — the essentials that shape every beautiful, accessible interface
      </>
    ),
    icon: "/images/doodles/doodle11.png",
  },
  {
    title: "Frameworks & Libraries",
    description: (
      <>
        JavaScript,{" "}
        <span className="relative">
          TypeScript
          <HighLighter className="bg-green-200" />
        </span>
        , React, and{" "}
        <span className="relative">
          Next.js
          <HighLighter className="bg-amber-200" />
        </span>{" "}
        — the engines behind interactive and scalable web apps
      </>
    ),
    icon: "/images/doodles/doodle8.png",
  },
  {
    title: "Styling Systems",
    description: (
      <>
        <span className="relative">
          Tailwind CSS
          <HighLighter className="bg-sky-200" />
        </span>
        , Material UI,{" "}
        <span className="relative">
          Shadcn UI
          <HighLighter className="bg-amber-200" />
        </span>
        , Styled Components, and Bootstrap — crafting consistent, modern, and
        responsive designs
      </>
    ),
    icon: "/images/doodles/doodle9.png",
  },
  {
    title: "Workflow & Extras",
    description: (
      <>
        Git & GitHub, NPM,{" "}
        <span className="relative">
          RESTful APIs
          <HighLighter className="bg-pink-200" />
        </span>
        , and{" "}
        <span className="relative">
          PWA
          <HighLighter className="bg-green-200" />
        </span>{" "}
        — tools that power efficient development and smooth user experiences
      </>
    ),
    icon: "/images/doodles/doodle10.png",
  },
];

function HomeServices() {
  return (
    <section className="px-5 md:pr-0 md:pl-15 lg:pl-20 mt-30 md:mt-20 flex flex-col">
      <div className="flex items-center  gap-3 sm:max-w-96 ">
        <h2 className="font-semibold text-5xl font-caveat">
          Services I'm providing that derive 99% result
        </h2>
        <Image
          src="/images/doodles/doodle7.png"
          alt="doodle"
          width="40"
          height="40"
          className="shrink-0"
        />
      </div>
      <Image
        src="/images/doodles/doodle22.png"
        alt="doodel"
        width="100"
        height="100"
        className="rotate-30 self-end -mb-10 -mr-5"
      />
      <div className="border-t-3 border-3 md:border-x-0 md:border-b-0 grid grid-cols-1 md:grid-cols-[0.5fr_1fr_1fr] grid-rows-4 divide-y-3">
        <div className="px-4 py-6 md:border-b-3">
          <h4 className="font-semibold text-xl">39</h4>
          <p className="font-medium">projects</p>
        </div>
        <div className="md:row-start-2 md:-row-end-1 px-4 py-6 md:border-b-3">
          <h4 className="font-semibold text-xl">3+ Years</h4>
          <p className="font-medium">of Front-end Expreience</p>
        </div>
        {services?.map((service, index) => (
          <div
            key={index}
            className="row-span-2 px-4 py-6 space-y-2 md:border-b-3 md:border-l-3"
          >
            <Image src={service?.icon} alt="doodle" width="45" height="45" />
            <h4 className="font-semibold text-xl">{service?.title}</h4>
            <p className="text-justify font-medium">{service?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeServices;
