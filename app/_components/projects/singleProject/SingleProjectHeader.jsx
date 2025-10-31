import { formatDate } from "@/app/_lib/utils";
import { Badge } from "../ProjectCard";

function SingleProjectHeader({ project = {} }) {
  return (
    <div className="space-y-1">
      <h2 className="text-3xl font-semibold">{project?.name}</h2>
      <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
        <p className="font-medium flex items-center gap-1 text-stone-500 flex-wrap">
          {!!project?.completionDate ? (
            <>
              Completed in
              <span>
                {formatDate(project?.completionDate, "MMMM YYYY (jMMMM jYYYY)")}
              </span>
            </>
          ) : (
            " Still in progress"
          )}
          {!!project?.workPlaceId && (
            <span>at {project?.workExperiences?.company} company</span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <Badge
            className={
              project?.type === "work-based" ? "bg-[#ff9b96]" : "bg-[#d9c2ff]"
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
            {project?.scale} level
          </Badge>
          <Badge
            className={
              project?.language === "English" ? "bg-amber-200" : "bg-orange-200"
            }
          >
            {project?.language}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectHeader;
