"use client";

import React, { useState } from "react";
import CourseOption from "./CourseOption";
import CourseInformation from "./CourseInformation";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";

type Props = {};

const AddCourses = (props: Props) => {
  const [active, setActive] = useState(2);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrise: "",
    tags: "",
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
      estimatedPrise:courseInfo.estimatedPrise,
      tags:courseInfo.tags,
      thumbnail:courseInfo.thumbnail,
      level:courseInfo.level,
      demoUrl:courseInfo.demoUrl,
      totalVideos:courseContentData.length,
      benefits:formattedBenefitData,
      prerequistions:formattedBenefitData,
      courseContent:formattedCourseContentData,
    }

    setCourseData(data)
  }

  return (
    <div className=" w-full flex gap-3 h-full">
      <div className="w-[75%] h-full bg-white shadow-lg rounded-lg">
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
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[1] top-18 right-0">
        <CourseOption active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default AddCourses;
