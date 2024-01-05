"use client";

import { useGetSingleCourseQuery } from "../../../redux/features/courses/coursesApi";
import React from "react";
import Loader from "../Loader/Loader";
import CourseDetailsTop from "./CourseDetailsTop";
import Container from "../../utils/Container";
import CourseOverView from "./CourseOverView";
import CourseIncludes from "./CourseIncludes";
import CourseContent from "./CourseContent";
import Review from "./Review";

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
              <div className=" lg:w-[60%] w-full flex flex-col gap-7">
                <CourseOverView text={data?.course?.description}/>
                <CourseIncludes title="What you will learn from this course?" data={data?.course?.benefits}/>
                <CourseIncludes title="What are the prerequisites for starting this course?" data={data?.course?.prerequisites}/>
                <CourseContent data={data?.course?.courseData}/>
                <Review/>
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
