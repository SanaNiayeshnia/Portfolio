import { TbDeviceDesktopShare, TbSettings } from "react-icons/tb";
import { Badge } from "../ProjectCard";
import Button from "../../ui/Button";
import { formatDate } from "@/app/_lib/utils";

function SingleProjectDetails({ project = {} }) {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">{project?.name}</h2>
        <div className="flex items-center gap-2">
          {" "}
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
        <p className="font-medium flex items-center gap-2 text-stone-500">
          {!!project?.completionDate ? (
            <>
              {" "}
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
      </div>
      <p className="text-justify font-medium">{project?.description}</p>
      <p className="space-x-1 font-medium">
        <TbSettings className="text-2xl inline-block" />
        <span className="font-semibold text-lg">Technologies:</span>{" "}
        <span>{project?.technologies?.join(", ")}</span>
      </p>
      {!!project?.github && (
        <Button
          href={project?.github}
          target="_blank"
          className="!w-full text-center"
          withDoodle
        >
          Source Code on GitHub
        </Button>
      )}
      {!!project?.demo?.description && (
        <p className="font-medium space-x-1">
          <TbDeviceDesktopShare className="text-2xl inline-block" />
          <span className="font-semibold text-lg">Demo Description:</span>
          <span>{project?.demo?.description}</span>
        </p>
      )}
      {!!project?.demo?.url && (
        <Button
          href={project?.demo?.url}
          target="_blank"
          className="!w-full text-center"
          withDoodle
          varient={project?.github ? "secondary" : "primary"}
        >
          See the Live Demo
        </Button>
      )}
    </div>
  );
}

export default SingleProjectDetails;
