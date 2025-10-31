import SingleProjectDetails from "@/app/_components/projects/singleProject/SingleProjectDetails";
import SingleProjectHeader from "@/app/_components/projects/singleProject/SingleProjectHeader";
import SingleProjectPics from "@/app/_components/projects/singleProject/SingleProjectPics";
import { getProject } from "@/app/_lib/data_services";

async function Project({ params }) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  return (
    <div className="pt-5 px-5 md:px-10 pb-10 space-y-4">
      <SingleProjectHeader project={project} />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <SingleProjectPics project={project} />
        <SingleProjectDetails project={project} />
      </div>
    </div>
  );
}

export default Project;
