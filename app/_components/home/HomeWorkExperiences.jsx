import { formatDate } from "@/app/_lib/utils";
import Image from "next/image";
const workExperiences = [
  {
    role: "WordPress Designer",
    company: "Raei Institute",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startDate: new Date("2023-11-01T00:00:00.000Z"),
    endDate: new Date("2024-06-01T00:00:00.000Z"),
  },
  {
    role: "Front-end Developer",
    company: "Vira Segal Karo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    startDate: new Date("2024-09-26T00:00:00.000Z"),
    endDate: new Date("2025-09-22T00:00:00.000Z"),
  },
];
const colors = ["green", "sky", "pink", "amber"];
const colorClasses = {
  green: "bg-green-200 ",
  sky: "bg-sky-200 ",
  pink: "bg-pink-200 ",
  amber: "bg-amber-200 ",
};

function HomeWorkExperiences() {
  return (
    <section className="flex items-center gap-6 mt-30">
      <div className="grid grid-cols-[0.5fr_10fr_0.5fr] grid-rows-[0.8fr_10fr_0.8fr] divide-2 divide-black w-3/5 min-h-[450px]">
        <div className="border-r-3 border-b-3 -mr-0.5 -mb-[2.5px]"></div>
        <div></div>
        <div className="border-b-3 border-l-3 -mb-[2.5px] -ml-[2.5px]"></div>
        <div></div>
        <div className="border-3 px-10 py-10 flex flex-col justify-center gap-6">
          {workExperiences?.map((experience, index) => (
            <div key={index} className="flex items-center gap-4">
              <p
                className={` border-2 ${
                  colorClasses?.[colors?.[index]]
                } pl-7 pr-9 rounded-md py-4 font-bold font-caveat text-5xl`}
              >
                {index + 1}
              </p>
              <div>
                <h5 className="font-medium text-xl mb-0.5  text-justify">
                  {experience?.role} at{" "}
                  <span className={`font-bold`}>{experience?.company}</span>
                </h5>
                <p className="font-medium">{experience?.description}</p>
                <p className="text-[#706F6F] font-medium ">
                  {formatDate(experience?.startDate, "MMMM YYYY (jMMMM jYYYY)")}{" "}
                  - {formatDate(experience?.endDate, "MMMM YYYY (jMMMM jYYYY)")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
        <div className="border-t-3 border-r-3 -mt-0.5 -mr-0.5"></div>
        <div></div>
        <div className="border-t-3 border-l-3 -mt-0.5 -ml-[2.5px]"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center self-end -mr-15">
          <Image
            src="/images/doodles/doodle25.png"
            alt="doodle"
            width="35"
            height="35"
          />
          <Image
            src="/images/doodles/doodle26.png"
            alt="doodle"
            width="90"
            height="30"
            className="-mt-8"
          />
        </div>
        <h2 className="text-5xl mt-5 font-caveat font-semibold bg-pink-200">
          Work Experience
        </h2>
        <Image
          src="/images/doodles/doodle2.png"
          alt="doodle"
          width="50"
          height="50"
          className="rotate-90"
        />
      </div>
    </section>
  );
}

export default HomeWorkExperiences;
