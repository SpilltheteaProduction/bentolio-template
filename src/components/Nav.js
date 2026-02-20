import Box from "./Box";

export default function Nav({ data, timeline }) {
  const contentAnimation = (delay) => {
    timeline
      .from(".logo", { x: -30, opacity: 0 }, delay + 0.3)
      .from(".cta", { x: 30, opacity: 0 }, delay + 0.3);
  };

  return (
    <Box
      timeline={timeline}
      className="translate-y-full scale-0 opacity-0"
      callbackAnimation={contentAnimation}
    >
      <nav className="flex size-full items-center justify-between max-lg:gap-4 max-md:flex-col max-md:justify-center">
        <div className="logo overflow-hidden font-heading text-2xl font-normal">
          <span className="block">{data?.logo}</span>
        </div>
      </nav>
    </Box>
  );
}
