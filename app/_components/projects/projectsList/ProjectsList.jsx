import { getProjects } from "@/app/_lib/data_services";
import ProjectListContent from "./ProjectListContent";
import ProjectCard from "../ProjectCard";

async function ProjectsList({ searchParams = {}, loading = false }) {
  const { scale, language, type } = searchParams;
  const projects = loading
    ? Array.from({ length: 12 })
    : await getProjects({ scale, language, type });

  return loading ? (
    <div className="grid grid-cols-1 min-[570px]:grid-cols-2 min-[900px]:grid-cols-3 pb-5 px-2 gap-y-2">
      {projects?.map((project, index) => (
        <ProjectCard key={index} loading={loading} />
      ))}
    </div>
  ) : (
    <ProjectListContent projects={projects} />
  );
}

export default ProjectsList;
