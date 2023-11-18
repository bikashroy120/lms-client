"use client"

import React, { useState } from 'react'
import CourseOption from './CourseOption'
import CourseInformation from './CourseInformation'

type Props = {}

const AddCourses = (props: Props) => {
  const [active,setActive]=useState(0)
  const [courseInfo,setCourseInfo]=useState({
    name:"",
    description:"",
    price:"",
    estimatedPrise:"",
    tags:"",
    level:"",
    demoUrl:"",
    thumbnail:"",
  })
  const [benefits,setBenefits] = useState([{title:""}])
  const [prerequistions,setPrerequistions] = useState([{title:""}])
  const [courseContentData,setCourseContentData]= useState([
    {
      videoUrl:"",
      title:"",
      description:"",
      videoSection:"",
      links:[
        {
          title:"",
          url:"",
        },
      ],
      suggestion:"",
    }
  ])
  const [courseData,setCourseData] = useState({})

  return (
    <div className=' w-full flex gap-3 h-full'>
        <div className='w-[75%] h-full bg-white shadow-lg rounded-lg'>
            {
              active === 0 && <CourseInformation courseInfo={courseInfo} setCourseInfo={setCourseInfo} active={active} setActive={setActive}/>
            }

            {
              active === 0 && <></>
            }
        </div>
        <div className='w-[20%] mt-[100px] h-screen fixed z-[1] top-18 right-0'>
            <CourseOption active={active} setActive={setActive}/>
        </div>
    </div>
  )
}

export default AddCourses