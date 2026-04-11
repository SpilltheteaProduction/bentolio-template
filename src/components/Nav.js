import Image from "next/image";
import Box from "./Box";
import { BLUR_DATA_URL } from '@/config';

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
      <nav className="logo flex items-center justify-start flex-row gap-4 h-full">
        <div className="min-h-full aspect-square relative">
          {data?.logo &&
            <Image
              src={data.logo}
              fill={true}
              alt='human'
              className='h-full w-full object-contain object-center'
              priority={true}
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />}
        </div>
        <div className="font-normal flex flex-col justify-center h-full leading-none">
          <p className="text-[1.3rem] min-[320px]:text-2xl font-heading">{data?.name}</p>
          <p className="text-[0.75rem] font-light min-lg:-mt-1">{data?.slogan}</p>
        </div>
      </nav>
    </Box>
  );
}
