import { useVideoAnimation } from '@/hooks/useAnimation';
import { DISABLE_LOADING_ANIMATION } from '@/config';

export const VideoPlayer = ({ data, timeline }) => {
    const containerRef = useVideoAnimation(timeline);
    const preAnimationClass = DISABLE_LOADING_ANIMATION ? '' : 'opacity-0';

    const videoContent = (
        <video
            className="object-cover absolute min-h-full min-w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ scale: 1.01 }}
        >
            <source src={data?.link} type="video/webm" />
            <source src={data?.backup} type="video/mp4" />
        </video>
    );

    return (
        <div ref={containerRef} className='size-full'>
            <div
                className={`${preAnimationClass} postloader relative left-0 top-0 z-20 h-full w-full translate-x-0 translate-y-0 transform overflow-hidden rounded-[16px] bg-transparent p-2 flex justify-center items-center max-lg:aspect-[2.4/1] max-md:aspect-[4/3]`}
                data-flip-id='postloader'
            >
                {videoContent}
            </div>

            {!DISABLE_LOADING_ANIMATION && (
                <div
                    className='preloader absolute-center z-30 aspect-[2.4/1] w-[60vw] overflow-hidden rounded-[16px] bg-transparent p-2 flex justify-center items-center max-md:w-[70vw] max-md:aspect-[4/3]'
                    data-flip-id='preloader'
                >
                    {videoContent}
                </div>
            )}
        </div>
    );
};
