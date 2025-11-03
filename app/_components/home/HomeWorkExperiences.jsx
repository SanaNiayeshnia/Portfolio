import { colors } from "@/app/_lib/db";
import { formatDate } from "@/app/_lib/utils";
import Image from "next/image";
import BorderFrame from "../ui/BorderFrame";
import { getWorkExperiences } from "@/app/_lib/data_services";
import { Skeleton } from "../ui/skeleton";

const colorClasses = {
  green: "bg-green-200 ",
  sky: "bg-sky-200 ",
  pink: "bg-pink-200 ",
  amber: "bg-amber-200 ",
};

async function HomeWorkExperiences({ loading = false }) {
  const workExperiences = loading
    ? Array.from({ length: 2 })
    : await getWorkExperiences();

  return (
    <section className="flex flex-col-reverse gap-5 sm:gap-0 md:flex-row mt-30">
      <BorderFrame>
        {workExperiences?.map((experience, index) => (
          <div key={index} className="flex gap-4">
            <p
              className={`border-3 ${
                colorClasses?.[colors?.[index]]
              } pl-5 pr-7 md:pl-7 md:pr-9 rounded-md py-2 md:py-4 font-bold font-caveat text-5xl flex justify-center items-center`}
            >
              {index + 1}
            </p>
            <div className="space-y-1 flex-grow">
              {loading ? (
                <>
                  <Skeleton className="h-7 w-2/3 bg-stone-300" />
                  <Skeleton className="h-12 w-full bg-stone-300 " />
                  <Skeleton className="h-5 bg-stone-300" />
                </>
              ) : (
                <>
                  {" "}
                  <h3 className="mb-1 text-justify flex flex-col sm:items-center sm:flex-row sm:gap-2">
                    <span className="text-sm sm:text-lg font-medium">
                      {experience?.position} at
                    </span>
                    <span className={`font-bold text-xl`}>
                      {experience?.company}
                    </span>
                  </h3>
                  <p className="font-medium text-justify">
                    {experience?.description}
                  </p>
                  <p className="text-stone-500 font-medium text-justify text-sm">
                    {formatDate(
                      experience?.startDate,
                      "MMMM YYYY (jMMMM jYYYY)"
                    )}{" "}
                    -{" "}
                    {formatDate(experience?.endDate, "MMMM YYYY (jMMMM jYYYY)")}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </BorderFrame>
      <div className="flex-grow md:py-[31px]">
        <div className="flex flex-col items-center md:items-stretch justify-center md:border-y-3 border-t-transparent h-full">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src="/images/doodles/doodle25.png"
              alt="doodle"
              width="35"
              height="35"
              loading="lazy"
            />
            <Image
              src="/images/doodles/doodle26.png"
              alt="doodle"
              width="90"
              height="30"
              className="-mt-8"
              loading="lazy"
            />
          </div>
          <h2 className="text-5xl mt-5 lg:mt-0 font-caveat w-max font-semibold gap-2 bg-pink-200 md:bg-transparent md:[&_span]:bg-pink-200 flex md:flex-col items-start">
            <span>Work</span>
            <span>Experience</span>
          </h2>
          <Image
            src="/images/doodles/doodle2.png"
            alt="doodle"
            width="50"
            height="50"
            className="rotate-90"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeWorkExperiences;
