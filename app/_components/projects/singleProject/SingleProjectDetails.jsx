import { TbDeviceDesktopShare, TbSettings } from "react-icons/tb";
import CustomButton from "../../ui/CustomButton";
import HighLighter from "../../ui/Highlighter";
import { Skeleton } from "../../ui/skeleton";

function SingleProjectDetails({ project = {}, loading = false }) {
  return (
    <div className="space-y-3 flex-grow">
      {loading ? (
        <Skeleton className="bg-stone-300 w-full h-46" />
      ) : (
        <p className="text-justify font-medium">{project?.description}</p>
      )}

      <DetailsSection
        title="Technologies"
        icon={<TbSettings className="text-2xl" />}
        highlighterClass="bg-blue-200"
        loading={loading}
      >
        {project?.technologies?.join(", ")}
      </DetailsSection>

      {loading && (
        <Skeleton className="bg-stone-300 w-full h-12 rounded-full" />
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-y-3 gap-x-2">
        {!!project?.github && (
          <CustomButton
            href={project?.github}
            target="_blank"
            className="!w-full text-center  md:order-1 lg:order-0"
            withDoodle
            aria-label="link to github"
          >
            Source Code on GitHub
          </CustomButton>
        )}
        {!!project?.demo?.description && (
          <DetailsSection
            title="Demo Description"
            className="md:col-span-2 lg:col-span-1 md:-order-1 lg:order-0"
            icon={<TbDeviceDesktopShare />}
            highlighterClass="bg-pink-200"
          >
            {project?.demo?.description}
          </DetailsSection>
        )}
        {!!project?.demo?.url && (
          <CustomButton
            href={project?.demo?.url}
            target="_blank"
            className="!w-full text-center"
            variant={project?.github ? "secondary" : "primary"}
          >
            See the Live Demo
          </CustomButton>
        )}
      </div>
    </div>
  );
}

export default SingleProjectDetails;

function DetailsSection({
  icon,
  className = "",
  title = "",
  highlighterClass = "",
  loading = false,
  children,
}) {
  return (
    <div className={`space-y-1 font-medium text-justify ${className}`}>
      {loading ? (
        <>
          <Skeleton className="bg-stone-300 w-30 h-8" />
          <Skeleton className="bg-stone-300 w-full h-20" />
        </>
      ) : (
        <>
          <p className="flex items-center gap-1 [&_svg]:text-2xl">
            {icon}
            <span className="font-semibold relative font-caveat text-2xl">
              {title}
              <HighLighter className={highlighterClass} />
            </span>
          </p>
          <span className="text-justify">{children}</span>
        </>
      )}
    </div>
  );
}
