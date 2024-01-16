"use client";
import Container from "../../utils/Container";
import React, { useEffect, useState } from "react";
import CourseLeft from "./CourseLeft";
import { useGetAllCourseQuery } from "@/redux/features/courses/coursesApi";
import CourseRight from "./CourseRight";
import Loader from "../Loader/Loader";
import BreadCrumb from "../ui/BreadCrumb";
import { useSelector } from "react-redux";
import { Pagination } from "antd";

const Courses = ({ searchParams }: any) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { search } = useSelector((state: any) => state.auth);
  let itemsPerPage = 10
  console.log("======================", search, query);

  // useEffect(()=>{
  //   const params = new URLSearchParams();
  //   if(search){
  //     params.append("search", search);
  //     const url = `${params.toString()}`;
  //     setQuery(url)
  //   }
  // },[search])

  const {
    data: course,
    isError,
    isLoading,
    refetch,
  } = useGetAllCourseQuery(`${query}&&page=${page}&limit=${itemsPerPage}`, {
    refetchOnMountOrArgChange: true,
  });

  const PagenationChange = (page: any, pageSiz: any) => {
    setPage(page);
  };

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
                  <CourseLeft setQuery={setQuery} setPage={setPage}/>
                </div>
                <div className=" 1200px:w-[80%] 1000px:w-[70%] w-full">
                  <CourseRight isLoading={isLoading} courses={course} />
                  <div className=" py-5 mt-8 flex items-center justify-center">
                    {isLoading ? (
                      <> </>
                    ) : (
                      <Pagination
                        defaultCurrent={1}
                        total={course?.item}
                        pageSize={itemsPerPage}
                        onChange={PagenationChange}
                        showSizeChanger={false}
                      />
                    )}
                  </div>
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
