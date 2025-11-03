import { languages } from "@/app/_lib/db";
import Image from "next/image";

export default function HomeEducation() {
  return (
    <div className="px-10 mt-15">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <div className="flex flex-col items-center md:-translate-y-5">
          <h2 className="text-5xl mt-5 md:-rotate-10 font-caveat font-semibold w-max bg-amber-200">
            Education
          </h2>
          <Image
            src="/images/doodles/doodle30.png"
            alt="doodle"
            width="20"
            height="20"
            className="rotate-45 scale-x-[-1] md:scale-x-100 md:-rotate-60 md:translate-x-10 -translate-y-3"
          />
        </div>
        <div className="border-4 rotate-3 md:w-max bg-white p-4 shadow-strict">
          <h3 className="font-semibold text-xl mb-0.5">
            Bachelor of Professional Computer Engineering
          </h3>
          <p className="font-medium">
            Technical and Vocation University of Shariaty
          </p>
          <p className="font-medium">Tehran, Iran</p>
          <p className="font-medium text-[#545454]">GPA: 19.24/20</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-2">
        <div className="border-4 -rotate-7 md:w-max bg-white p-4 shadow-strict max-w-96 space-y-3">
          {languages?.map((lang, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl mb-0.5">{lang?.name}</h3>
              <p className="font-medium">{lang?.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-5">
          <Image
            src="/images/doodles/doodle31.png"
            alt="doodle"
            width="80"
            height="80"
            className="-scale-y-100 md:scale-y-100 rotate-45 md:-rotate-30 translate-y-5"
          />
          <h2 className="text-5xl mt-5 font-caveat font-semibold w-max bg-amber-200">
            Language
          </h2>
        </div>
      </div>
    </div>
  );
}
