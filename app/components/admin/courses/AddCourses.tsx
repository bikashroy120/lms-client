"use client";

import React, { useState,useEffect } from "react";
import CourseOption from "./CourseOption";
import CourseInformation from "./CourseInformation";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";
import PreviewCourse from "./PreviewCourse";
import { useCreateCourseMutation } from "@/redux/features/courses/coursesApi";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Select from "react-select";

type Props = {};

const AddCourses = (props: Props) => {

  const [active, setActive] = useState(0);
  const [createCourse,{isLoading,isSuccess,error}] = useCreateCourseMutation()
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrise: "",
    category:"",
    tags: [""],
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequistions, setPrerequistions] = useState([{ title: "" }]);
  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "Untitled Section",
      links: [
        {
          title: "",
          url: "",
        },
      ],
      suggestion: "",
    },
  ]);
  const [courseData, setCourseData] = useState({});

  const handelSubmit = ()=>{
    const formattedBenefitData = benefits.map((benefit)=>({title:benefit.title}))
    const formattedPrereQuisitions = prerequistions.map((prerequistion)=>({title:prerequistion.title}))

    const formattedCourseContentData = courseContentData.map((courseContent)=>({
      videoUrl:courseContent.videoUrl,
      title:courseContent.title,
      description:courseContent.description,
      videoSection:courseContent.videoSection,
      links:courseContent.links.map((link)=>({
        title:link.title,
        url:link.url
      })),
      suggestion:courseContent.suggestion,
    }))


    const data = {
      name:courseInfo.name,
      description:courseInfo.description,
      price:courseInfo.price,
      estimatedPrice:courseInfo.estimatedPrise,
      category:courseInfo.category,
      tags:courseInfo.tags,
      thumbnail:courseInfo.thumbnail,
      level:courseInfo.level,
      demoUrl:courseInfo.demoUrl,
      totalVideos:courseContentData.length,
      benefits:formattedBenefitData,
      prerequisites:formattedPrereQuisitions,
      courseData:formattedCourseContentData,
    }
    setCourseData(data)
  }

  const handleAddCourse = async()=>{
    const data = courseData;
    if(!isLoading){
      await createCourse(data)
    }
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success("create course successfully")
      redirect("/admin/course/all")
    }
    if(error){
      if("data" in error){
        const errorData = error as any;
        toast.error(errorData.data.message)
      }else{
        console.log(error)
      }
    }
  },[isSuccess,error])

  return (
    <div className=" w-full flex gap-3 h-full">
      <div className="lg:w-[75%] w-full h-full bg-white shadow-lg rounded-lg">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseData
            benefits={benefits}
            setBenefits={setBenefits}
            prerequistions={prerequistions}
            setPrerequistions={setPrerequistions}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 2 && (
          <CourseContent
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            active={active}
            setActive={setActive}
            handelSubmit={handelSubmit}
          />
        )}

        {active === 3 && (
          <PreviewCourse
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleAddCourse={handleAddCourse}
          />
        )}
      </div>
      <div className="w-[20%] hidden lg:block mt-[100px] h-screen fixed z-[1] top-18 right-0">
        <CourseOption active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default AddCourses;
