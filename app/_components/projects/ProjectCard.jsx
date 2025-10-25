import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import ReferenceButton from "../ui/ReferenceButton";

function ProjectCard({ project = {} }) {
  return (
    <div className="aspect-square flex flex-col gap-3 px-10 py-9">
      <Image fill alt="doodle" src="/images/doodles/doodle14.png" />
      <div className="z-1 flex flex-col gap-4 justify-center">
        <div className="relative min-h-40 xl:min-h-50 border-4">
          <Image
            alt={`${project.title}`}
            src={project.img}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4 justify-between">
            <h3 className="text-xl font-semibold line-clamp-1">
              {project?.title}
            </h3>
            <ReferenceButton href={project?.link} />
          </div>
          <p className="text-justify font-medium line-clamp-3">
            {project?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
