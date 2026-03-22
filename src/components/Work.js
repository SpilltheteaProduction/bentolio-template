import { useDropdownAnimation } from "@/hooks/useAnimation";
import Box from "./Box";

export default function Work({ data, timeline }) {
  const { containerRef, handleClick } = useDropdownAnimation();

  const contentAnimation = (delay) => {
    const offset = 0.3;
    timeline
      .from(".work-heading", { yPercent: 100, stagger: 0.18 }, delay + offset)
      .from(
        ".work-border",
        { scaleX: 0, stagger: 0.18, ease: "slow.out" },
        delay + offset,
      )
  };

  return (
    <Box
      timeline={timeline}
      className="-translate-x-full scale-0 opacity-0 bg-primary"
      callbackAnimation={contentAnimation}
    >
      <div className="relative z-10 size-full overflow-hidden">
        <div
          className="hide-scrollbar flex h-full flex-col overflow-y-auto max-lg:overflow-y-visible"
          ref={containerRef}
        >
          {data?.projects?.map((project, index) => (
            <ProjectItem
              key={project?.title}
              project={project}
              index={index}
              isLast={index === data.projects.length - 1}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </Box>
  );
}

const ProjectItem = ({ project = {}, index, isLast, handleClick }) => {
  return (
    <button
      onClick={(event) => handleClick(event)}
      className={`${index === 0 ? "pointer-events-none h-full" : "pointer-events-auto pt-4"} ${!isLast ? "pb-4" : ""} flex items-start button relative`}
    >
      <div className="flex w-full items-baseline justify-start flex-col overflow-hidden">
        {/* Title */}
        <h3 className="font-heading text-2xl font-normal leading-[100%]">
          <span className="work-heading block pb-[2px]">{project?.title}</span>
        </h3>
        {/* Description */}
        <p
          className={`${index === 0 ? "mt-4" : "h-0 opacity-0"} description leading-[100%] text-start whitespace-pre-line`}
        >
          {project?.description}
        </p>
      </div>

      {/* Border */}
      {!isLast && (
        <div className="work-border absolute bottom-0 left-0 h-[1px] w-full origin-left bg-text" />
      )}
    </button>
  );
};
