"use client";

import VideoPlayer from "@/app/utils/VideoPlayer";
import React from "react";

type Props = {
  courseData: any;
  activeVideo: number;
  setActiveVideo: (activeVideo: number) => void;
};

const CourseAccessMedia = ({
  courseData,
  activeVideo,
  setActiveVideo,
}: Props) => {
  console.log(courseData);

  return (
    <div>
      <div className=" w-full lg:h-[570px] h-[280px] bg-black rounded-lg">
        {/* <VideoPlayer videoUrl={courseData[activeVideo]?.videoUrl}/> */}
      </div>
      <div>
        <div className=" flex items-center justify-between mt-5">
          <button
            onClick={() => setActiveVideo(activeVideo - 1)}
            disabled={activeVideo === 0}
            className={`bg-green-500 text-white font-semibold text-[18px] py-2 px-5 rounded-lg ${
              activeVideo === 0
              ? " cursor-not-allowed bg-gray-400 text-gray-300"
              : " cursor-pointer bg-green-500 text-white"
            }`}
          >
            Prev Lesson
          </button>
          <button
            onClick={() => setActiveVideo(activeVideo + 1)}
            disabled={courseData.length-1 === activeVideo}
            className={` font-semibold text-[18px] py-2 px-5 rounded-lg ${
              courseData.length-1 === activeVideo
                ? " cursor-not-allowed bg-gray-400 text-gray-300"
                : " cursor-pointer bg-green-500 text-white"
            }`}
          >
            Next Lesson
          </button>
        </div>
        <h2 className=" text-[25px] text-text font-semibold pt-3">{courseData[activeVideo]?.title}</h2>
      </div>
    </div>
  );
};

export default CourseAccessMedia;
