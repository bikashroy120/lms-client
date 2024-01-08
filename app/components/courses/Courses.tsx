"use client";
import Container from "../../utils/Container";
import React, { useState } from "react";
import CourseLeft from "./CourseLeft";
import { useGetAllCourseQuery } from "@/redux/features/courses/coursesApi";
import CourseRight from "./CourseRight";
import Loader from "../Loader/Loader";

const Courses = ({ searchParams }: any) => {
  const [query, setQuery] = useState("");
  console.log("======================", query);

  const {
    data: course,
    isError,
    isLoading,
    refetch,
  } = useGetAllCourseQuery(`${query}`, { refetchOnMountOrArgChange: true });

  return (
    <div className="lg:py-[50px] py-5 bg-[#fafafa]">
      <Container>
        <div>
          {isLoading ? (
            <>
                <Loader />
            </>
          ) : (
            <>
              <div className=" flex items-start justify-between gap-8">
                <div className=" 1200px:w-[20%] 1000px:w-[30%] w-full">
                  <CourseLeft setQuery={setQuery} />
                </div>
                <div className=" 1200px:w-[80%] 1000px:w-[70%] w-full">
                  <CourseRight isLoading={isLoading} courses={course} />
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
