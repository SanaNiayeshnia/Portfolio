import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

function ProjectListContent({ projects = [], loading = false }) {
  return (
    <div>
      {projects?.length > 0 || loading ? (
        <div className="grid grid-cols-1 min-[570px]:grid-cols-2 min-[900px]:grid-cols-3 pb-5 px-2 gap-y-2">
          {projects?.map((project, index) => (
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
    </div>
  );
}

export default ProjectListContent;
