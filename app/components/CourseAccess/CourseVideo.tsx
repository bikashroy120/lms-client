import Image from 'next/image'
import React from 'react'

type Props = {
    data:any;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
}

const CourseVideo = ({data,setActiveVideo,activeVideo}: Props) => {
  return (
    <div className=" w-full flex flex-col gap-7">
    <div className=" ">
      <h2 className=" text-text text-[23px] font-semibold">
        Course Video
      </h2>
      <div className=" mt-3 flex flex-col items-start gap-3">
        {data?.map((video: any, index: number) => (
          <div onClick={()=>setActiveVideo(index)} key={index} className={` flex w-full cursor-pointer items-center gap-2 py-3 px-5 rounded-lg ${activeVideo===index ? " bg-gray-200" : ""}`}>
            <Image
              src={"/image/play.svg"}
              width={50}
              height={50}
              alt="logo"
              className="mt-1 w-[30px] h-[30px]"
            />
            <h2 className=" text-[18px] font-semibold text-text">
              {video?.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CourseVideo