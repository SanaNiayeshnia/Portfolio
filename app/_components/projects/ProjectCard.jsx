import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

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
            <Link href={project?.link}>
              <TbArrowUpRight className="text-2xl bg-black rounded active:bg-amber-200 active:text-black hover:bg-amber-200 hover:text-black  transition-all duration-300 text-white shadow-strict" />
            </Link>
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
