import { TbDeviceDesktopShare, TbSettings } from "react-icons/tb";
import Button from "../../ui/Button";

function SingleProjectDetails({ project = {} }) {
  return (
    <div className="space-y-3">
      <p className="text-justify font-medium">{project?.description}</p>
      <p className="space-x-1 font-medium  text-justify">
        <TbSettings className="text-2xl inline-block" />
        <span className="font-semibold text-lg">Technologies:</span>{" "}
        <span>{project?.technologies?.join(", ")}</span>
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-2">
        {!!project?.github && (
          <Button
            href={project?.github}
            target="_blank"
            className="!w-full text-center  md:order-1 lg:order-0"
            withDoodle
          >
            Source Code on GitHub
          </Button>
        )}
        {!!project?.demo?.description && (
          <p className="font-medium space-x-1 text-justify md:col-span-2 lg:col-span-1 md:-order-1 lg:order-0">
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
            varient={project?.github ? "secondary" : "primary"}
          >
            See the Live Demo
          </Button>
        )}
      </div>
    </div>
  );
}

export default SingleProjectDetails;
