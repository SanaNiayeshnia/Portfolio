import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import ReferenceButton from "../ui/ReferenceButton";

function ProjectCard({ project = {}, loading = false }) {
  return (
    <div className="aspect-square flex flex-col gap-3 px-10 py-9 group relative min-w-40">
      <Image
        fill
        alt="doodle"
        src="/images/doodles/doodle14.png"
        placeholder="empty"
        fetchPriority="high"
      />
      <div className="z-1 flex flex-col gap-4 justify-center min-h-full">
        <div className="relative min-h-40 xl:min-h-45 border-3 overflow-hidden">
          {loading ? (
            <Skeleton className="bg-stone-300 w-full h-full rounded-none" />
          ) : (
            <Image
              alt={`${project?.name}`}
              src={project?.images?.[0] || "/images/placeholder.jpg"}
              fill
              className={` group-hover:scale-130 transition-all duration-300 ${
                project?.images?.[0]
                  ? "object-cover object-top"
                  : "object-center"
              }`}
              placeholder="blur"
              blurDataURL="/images/placeholder.jpg"
            />
          )}
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center gap-4 justify-between">
              {loading ? (
                <>
                  <Skeleton className="bg-stone-300 h-7 w-50" />
                  <Skeleton className="bg-stone-300 h-7 w-7" />
                </>
              ) : (
                <>
                  {" "}
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {project?.name}
                  </h3>
                  <ReferenceButton
                    href={`projects/${project?.id}`}
                    aria-label={`Link to ${project?.name}`}
                  />
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              {loading ? (
                <Skeleton className="bg-stone-300 w-40 h-7" />
              ) : (
                <>
                  {" "}
                  <Badge
                    className={
                      project?.type === "work-based"
                        ? "bg-[#ff9b96]"
                        : "bg-[#d9c2ff]"
                    }
                  >
                    {project?.type}
                  </Badge>
                  <Badge
                    className={
                      project?.scale === "advanced"
                        ? "bg-green-200"
                        : project?.scale === "average"
                        ? "bg-sky-200"
                        : "bg-pink-200"
                    }
                  >
                    {project?.scale}
                  </Badge>
                  <Badge
                    className={`hidden min-[1150px]:block ${
                      project?.language === "English"
                        ? "bg-amber-200"
                        : "bg-orange-200"
                    }`}
                  >
                    {project?.language}
                  </Badge>
                </>
              )}
            </div>
          </div>

          {loading ? (
            <Skeleton className="bg-stone-300 w-full h-20" />
          ) : (
            <p className="text-justify font-medium line-clamp-4">
              {project?.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

export function Badge({ className = "", children }) {
  return (
    <p
      className={`text-sm font-medium rounded-full border-2 w-max px-2 py-0.5 ${className}`}
    >
      {children}
    </p>
  );
}
