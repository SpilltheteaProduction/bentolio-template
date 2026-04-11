import Box from "./Box";

export const VideoPlayer = ({ data, timeline }) => {
    return (
        <Box timeline={timeline} className="relative overflow-hidden flex justify-center items-center translate-y-full scale-0 opacity-0 bg-transparent p-2 max-lg:aspect-[2.4/1] max-md:aspect-[4/3]">
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
        </Box >
    )
};