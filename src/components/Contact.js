import Box from "./Box";

export default function Contact({ data, timeline }) {
  const contentAnimation = (delay) => {
    const offset = 0.3;
    timeline
      .from(
        ".contact-heading",
        { opacity: 0, y: 30, duration: 0.8 },
        delay + offset,
      )
      .from(
        ".contact-bar",
        { opacity: 0, y: -10, duration: 0.8 },
        delay + offset,
      );
  };

  return (
    <Box
      timeline={timeline}
      className="-translate-y-full scale-0 bg-secondary text-primary opacity-0"
      callbackAnimation={contentAnimation}
    >
      <div className="size-full">
        <a
          href={`mailto:${data?.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full flex-col justify-between gap-4"
        >
          <div className="contact-bar flex items-center justify-between">
            <p className="text-base leading-[120%]">{data?.label}</p>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="contact-heading pb-2 font-heading text-[2.2rem] font-normal leading-[100%]">
              {data?.heading}
            </h2>
            <p>{data?.email}</p>
          </div>
        </a>
      </div>
    </Box>
  );
}
