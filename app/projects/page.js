import { Suspense } from "react";
import ProjectsHeader from "../_components/projects/ProjectsHeader";
import ProjectsList from "../_components/projects/projectsList/ProjectsList";

export const metadata = {
  title: "Projects",
  description: "List of Sana Niayeshnia's front-end projects.",
};

async function Projects({ searchParams }) {
  const sp = await searchParams;
  return (
    <div>
      <ProjectsHeader />
      <Suspense
        fallback={<ProjectsList loading />}
        key={`${sp.type}-${sp?.language}-${sp?.scale}`}
      >
        <ProjectsList searchParams={sp} />
      </Suspense>
    </div>
  );
}

export default Projects;
