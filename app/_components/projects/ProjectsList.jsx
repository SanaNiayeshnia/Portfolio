import { getProjects } from "@/app/_lib/data_services";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import Image from "next/image";

async function ProjectsList({ searchParams = {}, loading = false }) {
  const projects = loading ? Array.from({ length: 12 }) : await getProjects();
  const { scale, language, type } = searchParams;

  const filteredProjects = projects?.filter((project) => {
    const checkLanguage = language ? project?.language === language : true;
    const checkType = type ? project?.type === type : true;
    const checkScale = scale ? project?.scale === scale : true;
    return checkLanguage && checkType && checkScale;
  });
  return (
    <>
      {" "}
      {filteredProjects?.length > 0 || loading ? (
        <div className="grid grid-cols-1 min-[570px]:grid-cols-2 min-[900px]:grid-cols-3 px-2 gap-y-2">
          {filteredProjects?.map((project, index) => (
            <ProjectCard key={index} project={project} loading={loading} />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center place-content-center min-h-75 gap-2">
          <Image
            src="/images/doodles/doodle37.png"
            alt="doodle"
            width="60"
            height="60"
          />
          <p className="font-medium text-lg max-w-50 text-center">
            No project found with these filters!
          </p>
          <Link
            href="/projects"
            className="rounded-full border-2 py-1 px-3 font-medium"
          >
            Remove filters
          </Link>
        </div>
      )}
    </>
  );
}

export default ProjectsList;
