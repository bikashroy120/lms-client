"use client";

import { useGetSingleCourseQuery } from "../../../redux/features/courses/coursesApi";
import React from "react";
import Loader from "../Loader/Loader";
import CourseDetailsTop from "./CourseDetailsTop";
import Container from "../../utils/Container";
import CourseOverView from "./CourseOverView";

const CourseDetails = ({ id }: any) => {
  const { data, isLoading, isSuccess } = useGetSingleCourseQuery(id);
  console.log("========id=====", data?.course);

  return (
    <div className="bg-[#fafafa]">
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <CourseDetailsTop courseData={data?.course} />
          <Container>
            <div className="flex items-center lg:py-[80px] py-5 justify-between gap-5">
              <div className=" lg:w-[60%] w-full">
                <CourseOverView text={data?.course?.description}/>
              </div>
              <div className=" lg:w-[40%] w-full">
                
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
