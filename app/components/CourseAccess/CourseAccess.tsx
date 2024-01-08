"use client";

import { useGetSingleCourseQuery } from "../../../redux/features/courses/coursesApi";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Container from "../../utils/Container";
import CourseAccessMedia from "./CourseAccessMedia";
import Link from "next/link";
import Answer from "./Answer";
import Reviews from "./review/Reviews";

type Props = {
  id: any;
};

const CourseAccess = ({ id }: Props) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const { data, isLoading, refetch } = useGetSingleCourseQuery(id);
  const courseData = data?.course?.courseData;
  const [activeTab, setActiveTab] = useState(0);
  const tabData = ["Overview", "Resources", "Q&A", "Reviews"];

  return (
    <div className="bg-[#fafafa]">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Container>
            <div className="flex items-start lg:py-[30px] flex-col lg:flex-row py-5 justify-between gap-6">
              <div className=" lg:w-[66%] w-full flex flex-col gap-3">
                <CourseAccessMedia
                  courseData={courseData}
                  activeVideo={activeVideo}
                  setActiveVideo={setActiveVideo}
                />
                <div className=" px-5 flex items-center bg-gray-300 justify-between">
                  {tabData.map((item: string, index: number) => (
                    <button
                      onClick={() => setActiveTab(index)}
                      className={` lg:text-[18px] text-base py-3 font-bold ${
                        index === activeTab ? " text-primary" : "text-text"
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div>
                  {activeTab === 0 && (
                    <div>
                      <p>{courseData[activeVideo]?.description}</p>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div className=" mt-2">
                      {courseData[activeVideo]?.links.map(
                        (item: any, index: number) => (
                          <div key={index} className=" flex items-center gap-3">
                            <h2>{item?.title}</h2> :{" "}
                            <Link
                              href={item?.url}
                              target="_blank"
                              className=" text-primary"
                            >
                              {item?.url}
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div>
                      <Answer
                        refetch={refetch}
                        courseId={data?.course?._id}
                        data={courseData[activeVideo]}
                      />
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div>
                      <Reviews
                      refetch={refetch}
                      couresId={data?.course?._id}
                      data={data?.course?.reviews}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className=" lg:w-[34%] w-full sticky top-[370px]">
                <div className=" w-full flex flex-col gap-7"></div>
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default CourseAccess;
