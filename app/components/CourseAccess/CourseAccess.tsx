"use client"

import { useGetSingleCourseQuery } from '../../../redux/features/courses/coursesApi';
import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import Container from '../../utils/Container';
import CourseAccessMedia from './CourseAccessMedia';

type Props = {
  id:any
}

const CourseAccess = ({id}: Props) => {
  const [activeVideo,setActiveVideo] = useState(0)
  const { data, isLoading } = useGetSingleCourseQuery(id);
  const courseData = data?.course?.courseData;

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
              <div className=" lg:w-[66%] w-full flex flex-col gap-7">
                  <CourseAccessMedia courseData={courseData} activeVideo={activeVideo} setActiveVideo={setActiveVideo}/>
              </div>
              <div className=" lg:w-[34%] w-full sticky top-[370px]">
                <div className=" w-full flex flex-col gap-7">

                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  )
}

export default CourseAccess