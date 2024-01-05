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
import CourseBook from "./CourseBook";

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
            <div className="flex items-start lg:py-[80px] flex-col lg:flex-row py-5 justify-between gap-6">
              <div className=" lg:w-[66%] w-full flex flex-col gap-7">
                <CourseOverView text={data?.course?.description}/>
                <CourseIncludes title="What you will learn from this course?" data={data?.course?.benefits}/>
                <CourseIncludes title="What are the prerequisites for starting this course?" data={data?.course?.prerequisites}/>
                <CourseContent data={data?.course?.courseData}/>
                <Review/>
              </div>
              <div className=" lg:w-[34%] w-full sticky top-[370px]">
                <div className=" lg:relative lg:top-[-280px]">
                    <CourseBook courseData={data?.course}/>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
