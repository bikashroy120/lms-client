"use client"



import dynamic from 'next/dynamic';
import React, { useRef } from 'react';

type Props = {
    videoUrl:any
};

const VideoPlayer = ({videoUrl}: Props) => {
    const playerRef = useRef(null);
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <div
      ref={playerRef}
      className={`w-full h-full rounded-[10px] overflow-hidden relative bg-black`}
    >
      <ReactPlayer
        url={videoUrl}
        // muted={true}
        controls={true}
        playing={false}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
