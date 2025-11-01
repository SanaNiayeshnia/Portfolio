import Image from "next/image";
import { CustomSelect } from "../ui/CustomSelect";
import { projectLanguages, projectScales, projectTypes } from "@/app/_lib/db";
// import { MultiSelect } from "../ui/MultiSelect";

function ProjectsHeader() {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/images/doodles/doodle34.png"
        alt="doodle"
        width="120"
        height="120"
      />
      <div className="px-5 flex-grow flex items-center gap-4 justify-between">
        <h2 className="text-3xl font-semibold ">Projects</h2>
        <div className="flex items-center gap-2">
          <CustomSelect
            label="Project Type"
            placeholder="Choose a type..."
            options={projectTypes}
            filterName="type"
          />
          <CustomSelect
            label="Project Scale"
            placeholder="Choose a scale..."
            options={projectScales}
            filterName="scale"
          />
          <CustomSelect
            label="Project Language"
            placeholder="Choose a language..."
            options={projectLanguages}
            filterName="language"
          />
          {/* <MultiSelect options={projectTypes} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectsHeader;
