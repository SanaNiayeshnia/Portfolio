import { Suspense } from "react";
import ProjectsHeader from "../_components/projects/ProjectsHeader";
import ProjectsList from "../_components/projects/ProjectsList";

async function Projects({ searchParams }) {
  const sp = await searchParams;
  return (
    <div>
      <ProjectsHeader />
      <Suspense fallback={<ProjectsList loading />}>
        <ProjectsList searchParams={sp} />
      </Suspense>
    </div>
  );
}

export default Projects;
