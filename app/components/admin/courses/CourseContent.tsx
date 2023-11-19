import React, { useState } from 'react'

type Props = {
  courseContentData:any;
  setCourseContentData:(courseContentData:any[])=>void;
  active: number;
  setActive: (active: number) => void;
}

const CourseContent = ({courseContentData,setCourseContentData,active,setActive}: Props) => {

  const [isCollapsed,setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  )
  const [activeSection,setActiveSection] = useState(1)

  return (
    <div>
        
    </div>
  )
}

export default CourseContent