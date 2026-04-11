import Image from 'next/image';
import Box from './Box';

export default function Portrait({ data, timeline }) {
  return (
    <Box
      timeline={timeline}
      className='relative left-0 top-0 z-20 aspect-[455/211] h-full w-full scale-0 opacity-0 bg-overlay'
    >
      {data?.image && (
        <Image
          src={data.image}
          fill={true}
          alt='human'
          className='h-full w-full object-contain object-bottom'
          priority={true}
        />
      )}
    </Box>
  );
}
