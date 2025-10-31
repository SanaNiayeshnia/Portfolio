import SingleProjectDetails from "@/app/_components/projects/singleProject/SingleProjectDetails";
import SingleProjectHeader from "@/app/_components/projects/singleProject/SingleProjectHeader";
import SingleProjectPics from "@/app/_components/projects/singleProject/SingleProjectPics";

function ProjectLoading() {
  return (
    <div className="pt-5 px-5 md:px-10 pb-10 space-y-4">
      <SingleProjectHeader loading />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <SingleProjectPics loading />
        <SingleProjectDetails loading />
      </div>
    </div>
  );
}

export default ProjectLoading;
