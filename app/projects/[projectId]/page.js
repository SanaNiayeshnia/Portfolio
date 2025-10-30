import SingleProjectDetails from "@/app/_components/projects/singleProject/SingleProjectDetails";
import SingleProjectPics from "@/app/_components/projects/singleProject/SingleProjectPics";
import { getProject } from "@/app/_lib/data_services";

async function Project({ params }) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  return (
    <div className="mt-5 px-5 md:px-15 pb-10">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <SingleProjectPics project={project} />
        <SingleProjectDetails project={project} />
      </div>
    </div>
  );
}

export default Project;
