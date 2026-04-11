"use client";

import { useState } from "react";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Portrait from "@/components/Portrait";
import Socials from "@/components/Socials";
import Work from "@/components/Work";
import { useGlobalTimeline } from "@/hooks/useAnimation";
import LoadingBar from "@/components/LoadingBar";
import { DISABLE_LOADING_ANIMATION } from "@/config";
import { VideoPlayer } from "./VideoPlayer";

export default function MainGrid({ data = {} }) {
  const [loaded, setLoaded] = useState(DISABLE_LOADING_ANIMATION);
  const tl = useGlobalTimeline(loaded);

  return (
    <>
      {!DISABLE_LOADING_ANIMATION && (
        <LoadingBar onFinish={() => setLoaded(true)} />
      )}

      {/* Bento Grid */}
      <div className="grid h-screen min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-lg:max-h-none max-lg:grid-rows-none max-lg:py-6">
        {/* Top half */}
        <div className="col-span-full row-span-1">
          <Nav data={data?.nav} timeline={tl} />
        </div>

        <div className="col-span-full row-span-4">
          <VideoPlayer data={data?.video} timeline={tl} />
        </div>

        {/* Bottom half */}
        <div className="col-span-5 row-span-5 max-lg:col-span-6 max-md:col-span-full">
          <Intro data={data?.intro} timeline={tl} />
        </div>
        <div className="col-span-3 row-span-2 max-lg:col-span-6 max-md:col-span-full">
          <Portrait data={data?.portrait} timeline={tl} />
        </div>
        <div className="col-span-4 row-span-4 max-lg:col-span-6 max-lg:row-span-5 max-md:col-span-full">
          <Work data={data?.work} timeline={tl} />
        </div>
        <div className="col-span-3 row-span-3 max-lg:col-span-6 max-lg:min-h-[20rem] max-md:col-span-full">
          <Contact data={data?.contact} timeline={tl} />
        </div>
        <div className="col-span-4 row-span-1 max-lg:col-span-6 max-md:col-span-full">
          <Socials data={data?.socials} timeline={tl} />
        </div>
      </div>
    </>
  );
}
