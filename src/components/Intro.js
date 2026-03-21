import Box from "./Box";

export default function Intro({ data, timeline }) {
  const contentAnimation = (delay) => {
    timeline
      .from(".intro-heading", { opacity: 0, y: 30, duration: 0.8 }, delay + 0.3)
      .from(
        ".intro-icon",
        { opacity: 0, rotate: -180, duration: 1, ease: "slow.out" },
        delay + 0.3,
      );
  };

  return (
    <Box
      timeline={timeline}
      className="translate-x-full scale-0 opacity-0 bg-primary"
      callbackAnimation={contentAnimation}
    >
      <div className="z-10 flex size-full flex-col justify-between gap-4 hide-scrollbar overflow-scroll">
        <h1 className="intro-heading max-w-[32rem] font-heading text-5xl font-normal leading-[100%]">
          {data?.heading}
        </h1>
        <p className="text-start whitespace-pre-line pr-12 text-xl xl:!text-normal">{data?.description}</p>
        <p className="flex flex-row justify-start gap-2 flex-wrap max-h-full">
          {data?.bullets.map((element) => (
            <span className="whitespace-nowrap px-2 py-0.5 bg-white/20 rounded-full text-normal font-semibold xl:!text-sm">
              {element}
            </span>
          ))}
        </p>
      </div>
    </Box>
  );
}
