import { getProjects } from "@/app/_lib/data_services";
import ProjectListContent from "./ProjectListContent";

async function ProjectsList({ searchParams = {}, loading = false }) {
  const { scale, language, type } = searchParams;
  const projects = loading
    ? Array.from({ length: 12 })
    : await getProjects({ scale, language, type });
  return <ProjectListContent projects={projects} loading={loading} />;
}

export default ProjectsList;
