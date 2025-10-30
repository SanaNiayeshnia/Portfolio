import SingleProjectPics from "@/app/_components/projects/singleProject/SingleProjectPics";
import { getProject } from "@/app/_lib/data_services";

async function Project({ params }) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  return (
    <div className="px-5">
      <div className="flex gap-4 w-full">
        <SingleProjectPics project={project} />
      </div>
    </div>
  );
}

export default Project;
