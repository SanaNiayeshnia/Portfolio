import Image from "next/image";
import { CustomSelect } from "../ui/CustomSelect";
import { projectLanguages, projectScales, projectTypes } from "@/app/_lib/db";
import CustomMultiSelect from "../ui/CustomMultiSelect";

function ProjectsHeader() {
  return (
    <div className="flex gap-2 items-center mb-2">
      <Image
        src="/images/doodles/doodle34.png"
        alt="doodle"
        width="120"
        height="120"
      />
      <div className="px-5 flex-grow flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="flex items-center gap-2 self-end">
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
          <CustomMultiSelect
            label="Technologies"
            options={projectTypes}
            placeholder="Choose among technologies..."
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsHeader;
