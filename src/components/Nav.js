import Box from "./Box";
export default function Nav({ data, timeline }) {
  const contentAnimation = (delay) => {
    timeline
      .from(".logo", { x: -30, opacity: 0 }, delay + 0.3)
  };

  return (
    <Box
      timeline={timeline}
      className="translate-y-full scale-0 opacity-0 bg-secondary relative max-sm:p-4 p-2"
      callbackAnimation={contentAnimation}
    >
      <nav className="logo flex items-center justify-start flex-row gap-2 h-full">
        <div className="max-h-full aspect-square relative pt-2 pb-2">
          {data?.logo &&
            <img
              src={data.logo}
              fill={true}
              className='h-full w-full object-contain object-center max-w-16'
              priority={true}
              alt="logo" />
          }
        </div>
        <div className="font-normal flex flex-col justify-center h-full leading-none">
          <p className="text-[1.3rem] min-[320px]:text-2xl font-heading">{data?.name}</p>
          <p className="text-[0.75rem] font-light min-lg:-mt-1">{data?.slogan}</p>
        </div>
      </nav>
    </Box>
  );
}
