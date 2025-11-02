"use client";
import Image from "next/image";
import { CustomSelect } from "../ui/CustomSelect";
import { projectLanguages, projectScales, projectTypes } from "@/app/_lib/db";
import CustomMultiSelect from "../ui/CustomMultiSelect";
import { useGlobalContext } from "@/app/_contexts/GlobalContextProvider";
import { TbAdjustmentsAlt } from "react-icons/tb";

function ProjectsHeader() {
  const { openModal, closeModal } = useGlobalContext();
  function openFilterModal() {
    openModal({
      title: "Filters",
      content: <ProjectsHeader.Filters className="!flex-col !items-stretch" />,
      submit: { text: "See the results", handler: closeModal },
      cancel: false,
    });
  }

  return (
    <div className="flex gap-2 items-center -ml-10 lg:-ml-5 pr-5">
      <Image
        src="/images/doodles/doodle34.png"
        alt="doodle"
        width="120"
        height="120"
      />
      <div className="flex-grow flex justify-between lg:flex-col  gap-2">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="hidden lg:block">
          <ProjectsHeader.Filters />
        </div>
        <button
          onClick={openFilterModal}
          className="lg:hidden border-2 bg-white rounded-full px-3 py-2 text-sm font-medium flex items-center gap-1 cursor-pointer hover:bg-amber-200 transition-all duration-300 active:bg-amber-200"
        >
          <TbAdjustmentsAlt className="text-lg" />
          Filters
        </button>
      </div>
    </div>
  );
}

ProjectsHeader.Filters = function filters({ className = "" }) {
  return (
    <div className={`flex flex-row items-center gap-2 self-end ${className}`}>
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
  );
};

export default ProjectsHeader;
