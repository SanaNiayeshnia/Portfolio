import Image from "next/image";

export default function HomeEducation() {
  return (
    <div className="mt-15">
      <div className=" flex items-center justify-center gap-4">
        <div className="flex flex-col items-center -translate-y-5">
          <h2 className="text-5xl mt-5 -rotate-10 font-caveat font-semibold w-max bg-amber-200">
            Education
          </h2>
          <Image
            src="/images/doodles/doodle30.png"
            alt="doodle"
            width="20"
            height="20"
            className="-rotate-60 translate-x-10 -translate-y-3"
          />
        </div>
        <div className="border-3 rotate-3 w-max bg-white p-4 shadow-strict">
          <h4 className="font-semibold text-xl mb-0.5">
            Bachelor of Professional Computer Engineering
          </h4>
          <p className="font-medium">
            Technical and Vocation University of Shariaty
          </p>
          <p className="font-medium">Tehran, Iran</p>
          <p className="font-medium text-[#545454]">GPA: 19.24/20</p>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="border-3 -rotate-7 w-max bg-white p-4 shadow-strict max-w-96">
          <h4 className="font-semibold text-xl mb-0.5">English</h4>
          <p className="font-medium">
            Good English proficiency for technical and professional use
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Image
            src="/images/doodles/doodle31.png"
            alt="doodle"
            width="80"
            height="80"
            className="-rotate-30 translate-y-5"
          />
          <h2 className="text-5xl mt-5 font-caveat font-semibold w-max bg-amber-200">
            Language
          </h2>
        </div>
      </div>
    </div>
  );
}
