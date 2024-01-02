"use client";

import { useGetSingleCourseQuery } from "../../../redux/features/courses/coursesApi";
import React from "react";
import Loader from "../Loader/Loader";
import CourseDetailsTop from "./CourseDetailsTop";

const CourseDetails = ({ id }: any) => {
  const { data, isLoading, isSuccess } = useGetSingleCourseQuery(id);
  console.log("========id=====", data?.course);

  return (
    <div>
      {isLoading ? (
        <>
        <Loader/>
        </>
      ) : (
        <>
          <CourseDetailsTop courseData={data?.course}/>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
