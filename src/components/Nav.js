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
      className="translate-y-full scale-0 opacity-0 bg-secondary relative p-2"
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
        <div className="font-normal flex flex-col justify-center h-full">
          <p className="max-sm:text-2xl text-[26px] font-heading">{data?.name}</p>
          <p className="max-sm:text-[0.6rem] max-sm:-mt-1.5 text-[12px] -mt-2.5 font-light">{data?.slogan}</p>
        </div>
      </nav>
    </Box>
  );
}
