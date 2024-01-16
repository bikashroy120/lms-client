"use client"


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {
  user: any;
};

const EnrollCourse = ({ user }: Props) => {
  console.log("======course=====", user?.courses);
  const router = useRouter()

  return (
    <div>
      <div className=" grid 1200px:grid-cols-3 1000px:grid-cols-2 grid-cols-1 gap-5">
        {user?.courses?.map((course: any, index: number) => (
          <div key={index}>
            <div className="py-5 bg-white border shadow-md px-5 rounded-lg ">
              <div
                onClick={() => router.push(`/access-course/${course?.courseId?._id}`)}
                className="w-full h-[250px] rounded-lg relative overflow-hidden cursor-pointer group"
              >
                <Image
                  src={course?.courseId?.thumbnail}
                  width={500}
                  height={500}
                  alt="course image"
                  className="w-full group-hover:scale-110 duration-500 h-full object-fill"
                />
                <div className=" absolute right-3 shadow-md bottom-3 px-3 py-2 rounded-lg bg-white">
                  <h2 className=" text-[25px] text-primary font-bold">
                    ${course?.courseId?.price}{" "}
                    <span className="text-[15px]  text-lightText">
                      ${course?.courseId?.estimatedPrice}
                    </span>
                  </h2>
                </div>
              </div>
              <div className=" mt-5">
                <Link
                  href={`/access-course/${course?.courseId?._id}`}
                  className=" group-hover:text-white"
                >
                  <h2 className=" text-[18px] font-bold hover:text-primary  duration-500 text-text">
                    {course?.courseId?.name.slice(0, 50)}...
                  </h2>
                </Link>
                <div className="flex items-center py-3 text-[18px] font-semibold text-lightText justify-between">
                  <h3>{course?.courseId?.category}</h3>
                  <h3>Lesson{course?.courseId?.courseData?.length}</h3>
                </div>
                <div className=" bg-light w-full h-[1px]"></div>
              </div>
              <div className=" flex items-center pt-4 justify-between">
                <div className="w-[20px]"></div>
                <CustomButton
                  handelClick={() => router.push(`/access-course/${course?.courseId?._id}`)}
                  title="View Course"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollCourse;
